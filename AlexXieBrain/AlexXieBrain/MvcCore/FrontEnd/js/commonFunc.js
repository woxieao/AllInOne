$.common = {};
$.common.Ajax = function (arg, scope) {
    function httpSuccess(result, successFunc) {
        switch (result.Status) {
            case 1:
                {
                    //login func
                    break;
                }
            case 2:

                {
                    layer.alert(result.Msg);
                    break;
                }
            case 3:
                {
                    if (successFunc === 1) {
                        layer.msg("操作成功", function () { window.location.reload(); });
                        return;
                    }

                    if (successFunc === undefined) {
                        layer.msg("操作成功");
                        return;
                    }
                    successFunc(result.Data);
                    break;
                }
            default:
                {
                    layer.alert("未知的状态码");
                    console.log(result.Status);
                }
        }

    }
    console.log(arg.data);
    arg.data = JSON.stringify(arg.data || "");
    arg.contentType = arg.contentType || "application/json; charset=utf-8";
    arg.dataType = arg.dataType || "json";
    arg.type = arg.type || "post";
    var successFunc = arg.success;
    arg.success = function (result) {
        httpSuccess(result, successFunc);
        if (scope !== undefined) {
            try {
                scope.$apply();
            } catch (e) {
                //do nothing
            }
        }
    };
    arg.error = arg.error === undefined ? function () { layer.alert("服务器异常"); } : arg.error;
    $.ajax(arg);
}