var app = angular.module('app', []);
app.factory('commonNg', ['$http', function ($http) {
    window.ngData = {};
    function httpError(result, errorFunc) {
        if (errorFunc == undefined) {
            layer.alert("服务器连接异常");
            console.log(result);
        } else {
            errorFunc(result);
        }
    }
    function httpSuccess(result, successFunc) {
        switch (result.Status) {
            case -1:
            case "-1":
                {
                    layer.alert("登录信息已失效", function () { $common.WeChatLogin(); });
                    break;
                }
            case 0:
            case "0":
                {
                    layer.alert(result.Msg);
                    break;
                }
            case 1:
            case "1":
                {
                    if (successFunc != undefined)
                    { successFunc(result.Data); }
                    break;
                }
            default:
                {
                    layer.alert("未知的状态码");
                    console.log(result.Status);
                }
        }

    }
    return {
        Ajax: function (data) {
            switch (data.type) {
                case "post":
                case "POST":
                    {
                        $http.post(data.url, data.data).success(function (result) {
                            httpSuccess(result, data.success);
                        }).error(function (result) {
                            httpError(result, data.error);
                        });
                        break;
                    }
                default:
                    {
                        $http.get(data.url).success(function (result) {
                            httpSuccess(result, data.success);
                        }).error(function (result) { httpError(result, data.error); });
                    }
            }
        },
        Log: function (data) { console.log(data); }
    }
}]);