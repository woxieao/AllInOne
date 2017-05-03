var app = angular.module('app', []);
app.controller('GetFuncListCtrl', function ($scope) {
    var bg = chrome.extension.getBackgroundPage();

    $('#tabs li:eq(0) a').tab('show');
    $scope.FuncList;
    $scope.TestRun = function (code) {
        try {
            bg.BgApi.CallFunc(code);
            bg.chromeMethods.CreateNotification({ msg: "执行成功" });
        } catch (e) {
            bg.chromeMethods.CreateNotification({ msg: "执行失败\n" + e });
        }
    }

    $scope.SysFunc = function () {
        bg.FuncHandler.GetFuncList((funcList) => {
            $scope.FuncList = funcList
            $scope.$apply();
        }, 0, true);
    }
    $scope.MyFunc = function () {
        bg.FuncHandler.GetFuncList((funcList) => {
            $scope.FuncList = funcList
            $scope.$apply();
        }, 0, false);
    }
    $scope.AddTempFunc = function () {
        $('#tabs li:eq(2) a').tab('show');
        $scope.FuncList = [];
        $scope.FuncList.push({
            Desc: "函数名介绍~",
            TimeSpan: 1000 * 60,
            IsEnabled: true,
            FuncCode: "alert(xam.$('hello world {0}',xam.GetTimeStr()));",
            FuncName: "HelloWorld",
            IsNew: true
        });
    }
    $scope.RemoveFunc = function (index) {
        if (confirm("确定删除?")) {
            var funcName = $scope.FuncList[index].FuncName;
            $scope.FuncList.splice(index, 1);
            bg.FuncHandler.RemoveFunc(funcName);
        }
    }
    $scope.AddFunc = function (funcInfo) {
        bg.FuncHandler.AddFunc(funcInfo, () => { location.reload() });
    }
    $scope.SysFunc();
});
