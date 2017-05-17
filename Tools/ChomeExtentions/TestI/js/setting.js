var app = angular.module('app', []);
app.controller('GetFuncListCtrl', function ($scope) {
    var bg = chrome.extension.getBackgroundPage();

    $('#tabs li:eq(0) a').tab('show');
    $scope.FuncList = [];
    $scope.TestRun = function (code) {
        try {
            eval(code);
            bg.chromeMethods.CreateNotification({ msg: "执行成功" });
        } catch (e) {
            bg.chromeMethods.CreateNotification({ msg: "执行失败\n" + e });
        }
    }

    $scope.AddTempFunc = function () {
        $('#tabs li:eq(2) a').tab('show');
        $scope.FuncList = [{
            Desc: "函数名介绍~",
            TimeSpan: 1000 * 60,
            IsEnabled: true,
            FuncCode: "alert(xam.$('hello world {0}',xam.GetTimeStr()));",
            FuncName: "HelloWorld",
            IsNew: true
        }];
    }
});
