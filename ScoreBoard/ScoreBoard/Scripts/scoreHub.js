app.factory('scoreHub', [function () {
    var $scope;
    var scoreHub = $.connection.ScoreBoard;
    function isWeChatPage() {
        return location.pathname.split('/')[1].toLowerCase() === "room";
    }
    function init() {
        var roomId = $common.GetQuery("roomId");
        scoreHub.server.joinRoom(roomId, isWeChatPage());
        setTimeout(function () { scoreHub.server.updateScore(roomId); }, 200);
    }

    scoreHub.InitScope = function (scope) {
        $scope = scope;
    }

    $.connection.hub.start({ transport: ['longPolling'] }).done(function () {
        //'webSockets', 服务器IIS7 只能longPolling 本地也longPolling算了免得有些功能longPolling不支持本地发现不了坑爹
        init();
    });
    $.connection.hub.reconnected(function () {
        init();
    });
    scoreHub.client.exceptionHandler = function (error) {
        //        alert(error);
        console.log(error);
        //        location.reload();
    };
    scoreHub.client.msg = function (msg) {
        layer.alert(msg);
    };
    scoreHub.client.log = function (msg) {
        console.log(msg);
    };
    scoreHub.client.close = function (msg) {
        layer.alert(msg, function () { location.href = isWeChatPage() ? "/Room/Main" : "/Home/Index"; });
    };
    scoreHub.client.exitRoom = function () {
        layer.alert("退出房间成功", function () { location.href = "/Room/Main"; });
    }
    scoreHub.ExitRoom = function (roomId) {
        layer.confirm("是否退出房间", function () {
            scoreHub.server.exitRoom(roomId);
            layer.closeAll('dialog');
        });
    }

    ///断线重发
    var submitIndex = 0;
    var lastMsgBoxId = 0;
    var timeOut = 5000;
    var onReCallTimes = 0;
    function reCall(index) {
        setTimeout(function () {
            if ($scope.IsOnSubmit && submitIndex === index) {
                if (++onReCallTimes > 3) {
                    layer.msg("服务器连接异常,正在刷新页面..",
                        { time: 1500 },
                        function () {
                            window.location.reload();
                        });
                } else {
                    lastMsgBoxId = layer.msg("服务器连接失败,正在重连..", { time: timeOut });
                    console.log("服务器连接失败,正在重连..");
                    reCall(submitIndex);
                    scoreHub.server.ping();
                    $scope.$apply();
                }
            }
        }, timeOut);
    }
    scoreHub.OnSubmit = function () {
        if ($scope.IsOnSubmit) {
            return;
        } else {
            $scope.IsOnSubmit = true;
            lastMsgBoxId = layer.msg("正在连接服务器..", { time: timeOut });
            reCall(++submitIndex, $scope);
        }
    }
    scoreHub.client.pong = function (msg) {
        $scope.IsOnSubmit = false;
        onReCallTimes = 0;
        ++submitIndex;
        $scope.$apply();
        layer.close(lastMsgBoxId);
        if (msg) {
            layer.alert(msg);
        }
    }
    ///断线重发结束

    scoreHub.client.kicked = function () {
        layer.alert("房主将你请出了房间", function () { location.href = "/Room/Main"; });
    }


    return scoreHub;
}]);