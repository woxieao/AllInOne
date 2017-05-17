var xam = {
    LoopRunFuncInfo: [{ LastRunTime: new Date() * 1, TimeSpan: 1000 * 10, FuncName: "Test" }],
    LoopFuncHandler: function () {
        FuncHandler.GetFuncList((funcList) => {
            var currentTime = new Date() * 1;
            for (var i in funcList) {
                var funcInfo = funcList[i];
                var funcIndex = xam.JsonIndex(xam.LoopRunFuncInfo, "FuncName", funcInfo.FuncName);
                if (funcIndex !== -1) {
                    var lastRunInfo = xam.LoopRunFuncInfo[funcIndex];
                    if (currentTime - lastRunInfo.LastRunTime - funcInfo.TimeSpan >= 0) {
                        lastRunInfo.TimeSpan = funcInfo.TimeSpan;
                        lastRunInfo.LastRunTime = currentTime;
                        try {
                            xam.Eval(funcInfo.FuncCode);
                        } catch (e) {
                            chromeMethods.CreateNotification(xam.$("函数[{0}]发生错误", funcName), e);
                        }
                    }
                } else {
                    xam.LoopRunFuncInfo.push({
                        FuncName: funcInfo.FuncName,
                        LastRunTime: currentTime,
                        TimeSpan: funcInfo.TimeSpan
                    });
                    try {
                        xam.Eval(funcInfo.FuncCode);
                    } catch (e) {
                        chromeMethods.CreateNotification(xam.$("函数[{0}]发生错误", funcName), e);
                    }
                }
            }
            setTimeout(xam.LoopFuncHandler, 400);
        }, 2);
    },
    GetSetStr: function () {
        var argReg = /{[\u4e00-\u9fa5 ]+\:[^}]+}/g;
        function decomposeArgStr(argStr) {
            return argStr.replace("{", "").replace("}", "");
        }
        function strToData(str) {
            var data = str.split(":");
            if (data.length != 2) {
                throw "解析数据包出错"
            } else {
                return { Key: data[0], Val: data[1] };
            }
        }
        this.Set = function (str, newJsonVal) {
            var argList = str.match(argReg);
            var oriData = {};
            for (var i in argList) {
                var packageStr = argList[i];
                var data = strToData(decomposeArgStr(packageStr));

                oriData[data.Key] = data.Val;
            }

            for (var key in newJsonVal) {
                oriData[key] = newJsonVal[key];
            }

            for (var key in oriData) {
                var tempReg = new RegExp("{[ ]*" + key + "[ ]*\:[^}]+}", "g");
                str = str.replace(tempReg, "{" + key + ":" + oriData[key] + "}");
            }
            return str;
        }
        this.Get = function (str) {
            var argList = str.match(argReg);
            var jsonVal = {};
            for (var i in argList) {
                var arg = argList[i];
                var data = strToData(decomposeArgStr(arg));
                jsonVal[data.Key] = data.Val;
            }
            return jsonVal;
        }
    },
    JsonIndex: function (jsonArr, fieldName, val) {
        return jsonArr.map(function (d) { return d[fieldName]; }).indexOf(val);
    },
    GetTimeStr: function (time) {
        time = time === undefined ? new Date() : new Date(time);
        var d = time;
        var m = d.getMinutes();
        var h = d.getHours();
        var datestring = xam.$("{0}年{1}月{2}日{3}时{4}分", d.getFullYear(), d.getMonth() + 1, d.getDate(), (h > 9 ? h : '0' + h), (m > 9 ? m : '0' + m));
        return datestring;
    },
    CallAjax: function (info) {
        info.type = info.type === undefined ? "GET" : info.type;
        info.getResult = info.getResult === undefined ? function () { } : info.getResult;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(info.type, info.url, true);
        for (var i in info.header) {
            xmlhttp.setRequestHeader(info.header[i].key, info.header[i].value);
        }
        xmlhttp.send(info.data);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4) {
                info.getResult(xmlhttp)
                info.complete(xmlhttp.responseText);
            }
        };
    },
    RandomNum: function (seed) {
        var ran = (Math.random() + "").substr(2) * 1;
        return seed === undefined ? ran : ran % seed;
    },
    RandomStr: function (seed) {
        return xam.RandomNum(seed).toString(32);
    },
    GetColumns(objArray, columnName) {
        var arr = [];
        for (var i in objArray) {
            if (objArray[i][columnName] !== undefined) {
                arr.push(objArray[i][columnName]);
            }
            return arr;
        }
    },
    PromptJson(obj, info) {
        info = info === undefined ? "" : info;
        prompt(info, JSON.stringify(obj));
    },
    $: function (str) {
        var reg = /{\d+}/g;
        var flag = "%xam#";
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
        var newValList = [];
        if (regResult !== null) {
            for (var i in regResult) {
                var oriStr = regResult[i];
                var arg = oriStr.substr(1, oriStr.length - 2) * 1 + 1;
                str = str.replace(oriStr, flag + arguments[arg] + flag);
            }
        }
        return str.replace(new RegExp(flag, "g"), "");
    },
    GetCode: function (func) {
        var entire = func.toString();
        return entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
    },
    Test: function () { alert(delayTime) },
    TempFunc: {},
    Eval: function (code, callBack) {
        //needs jquery
        //chrome extension not allow eval or new Function
        $.ajax({
            url: 'data:application/javascript;charset=utf-8,' + encodeURIComponent(code),
            cache: true,
            success: function (r) {
                if (typeof callBack === "function") {
                    callBack()
                }
            },
            error: function (r) {
                console.log("Eval error");
                console.log(r)
            }
        })
    },
    NewFunction: function (info) {
        var code = info.code || "";
        var callBack = info.callBack || function (func) { func(); };
        var funcName = info.funcName || "Func" + xam.RandomNum();
        $.ajax({
            url: xam.$('data:application/javascript;charset=utf-8,xam.TempFuncList.{0}=function (){ {1} }', funcName, encodeURIComponent(code)),
            cache: true,
            success: function (r) {
                if (typeof callBack === "function") {
                    callBack(xam.TempFuncList[funcName]);
                }
            },
            error: function (r) {
                console.log("NewFunction error");
                console.log(r)
            }
        })
    },
    TempFuncList: {}
}