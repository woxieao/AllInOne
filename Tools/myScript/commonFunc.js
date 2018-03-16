console.log("%c", "padding:100px 100px;line-height:200px;background:url('https://pic4.zhimg.com/v2-e24a0dabb1556560fe08362ed2c83d03') no-repeat;background-size:200px 200px;");
var commonFunc = {
    Ajax: function (arg, scope) {
        function httpSuccess(result, successFunc, errorFunc) {
            switch (result.Status) {
                case -1:
                case "-1":
                    {
                        $('#loginModal').modal("show");
                        break;
                    }
                case 0:
                case "0":
                    {
                        layer.alert(result.Msg);
                        if (errorFunc !== undefined) {
                            errorFunc();
                        }
                        break;
                    }
                case 1:
                case "1":
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
        var isJson = ($.isPlainObject(arg.data) || $.isArray(arg.data));
        arg.data = isJson ? JSON.stringify(arg.data || "") : arg.data;

        if (isJson && arg.contentType === undefined) {
            arg.contentType = arg.contentType || "application/json; charset=utf-8";
        }
        arg.type = arg.type || "post";
        var successFunc = arg.success;
        arg.success = function (result) {
            httpSuccess(result, successFunc, arg.error);
            if (scope !== undefined) {
                try {
                    scope.$apply();
                } catch (e) {
                    //do nothing
                }
            }
        };
        $.ajax(arg);
    },
    JsonIndex: function (obj, fieldName, val) {
        return obj.map(function (d) { return d[fieldName]; }).indexOf(val);
    },
    GetQuery: function (name) {
        var url = location.search;
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            var dataList = str.split("&");
            for (var i = 0; i < dataList.length; i++) {
                var currentData = dataList[i].split("=");
                if (currentData[0].toLowerCase() === name.toLowerCase()) {
                    return decodeURIComponent(currentData[1]);
                }
            }
        }
        return undefined;
    },
    $: function (str) {
        var reg = /{\d+}/g;
        var flag = "%xa#";
        var regResult = str.match(reg);
        var numList = [];
        for (var i in regResult) {
            var oriStr = regResult[i];
            var num = oriStr.substr(1, oriStr.length - 2) * 1;
            if (num < 0) {
                throw "参数下标不可小于0";
            }
            numList.push(num);
        }
        var maxIndex = (numList.sort())[numList.length - 1];
        if (maxIndex > arguments.length - 2) {
            throw "参数输入有误";
        }
        if (regResult !== null) {
            for (var i in regResult) {
                var oriStr = regResult[i];
                var arg = oriStr.substr(1, oriStr.length - 2) * 1 + 1;
                str = str.replace(oriStr, flag + arguments[arg] + flag);
            }
        }
        return str.replace(new RegExp(flag, "g"), "");
    },
    ///filePath 应为相对路径("/file/somefile.doc")或绝对路径(必须带有"http://")
    ///本地无法使用 外网才能使用
    ViewFile: function (filePath) {
        var protocol = location.protocol;
        var origin = commonFunc.$("{0}//{1}", location.protocol, location.host);
        filePath = filePath.length > protocol.length
            ? (filePath.substr(0, protocol.length).toLowerCase() === protocol.toLowerCase()
                ? filePath
                : origin + filePath)
            : origin + filePath;
        layer.msg("正在加载..");
        $.ajax({
            url: "http://www.yozodcs.com/onlinefile",
            data:
            {
                downloadUrl: filePath,
                convertType: 0
            },
            dataType: "json",
            type: "post",
            success: function (r) {
                if (r.result === 0) {
                    window.open(r.data[0]);
                } else {
                    layer.alert(r.message);
                }
            },
            error: function (r) {
                console.log(r);
                layer.msg("加载失败");
            }
        });
    }
};