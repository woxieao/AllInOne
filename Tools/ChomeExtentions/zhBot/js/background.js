var chromeMethods = {
    Set: function (key, val, callBack) {
        var obj = {};
        obj[key] = val;
        chrome.storage.local.set(obj, function () {
            if (callBack !== undefined) {
                callBack();
            }
        });
    },
    Get: function (key, callBack) {
        chrome.storage.local.get(key, function (items) {
            var data = items[key];
            data = data || [];
            callBack(data);
        });
    },
    CreateNotification: function (opt) {
        var options = {
            title: opt.title || "提示",
            message: ($.isPlainObject(opt.msg) || $.isArray(opt.msg)) ? JSON.stringify(opt.msg) : (opt.msg === undefined ? "" : opt.msg + ""),
            iconUrl: opt.iconUrl || "xa.png",
            priority: 1,
            type: "basic"
        }
        chrome.notifications.create(options, function (createdId) {
            if (opt.timeOut !== undefined) {
                setTimeout(function () { chrome.notifications.clear(createdId); }, opt.timeOut);
            }
            var handler = function (id) {
                if (id == createdId) {
                    var func = opt.func || function () { };
                    func();
                    chrome.notifications.clear(id);
                    chrome.notifications.onClicked.removeListener(handler);
                }
            };
            chrome.notifications.onClicked.addListener(handler);
        });
    }
};

var FuncHandler = {
    MinTimeSpan: 500,
    AddFunc: function (funcInfo, callBack) {
        funcInfo.IsEnabled = true;
        funcInfo.TimeSpan *= 1;
        chromeMethods.Get(config.FuncListKeyName,
            (funcList) => {
                FuncHandler.CheckFunc(funcInfo, funcList);
                funcList.push(funcInfo);
                chromeMethods.Set(config.FuncListKeyName, funcList);
                chromeMethods.CreateNotification({ msg: "创建函数成功" });
                callBack = callBack || function () { };
                callBack();
            })
    },
    InitSysFunc: function (funcInfoList) {
        chromeMethods.Get(config.FuncHasInitedKeyName, (result) => {
            if (result !== true) {
                FuncHandler.GetFuncList((funcList) => {
                    for (var i in funcInfoList) {
                        funcInfo = funcInfoList[i];
                        FuncHandler.CheckFunc(funcInfo, funcList, true);
                        var index = xam.JsonIndex(funcList, "FuncName", funcInfo.FuncName);
                        if (index !== -1) {
                            funcList[index] = funcInfo;
                        } else {
                            funcList.push(funcInfo);
                        }
                    }
                    chromeMethods.Set(config.FuncListKeyName, funcList);
                    chromeMethods.Set(config.FuncHasInitedKeyName, true);
                }, 0);
            }
        })
    },
    ExecFunc: function (funcName) {
        chromeMethods.Get(config.FuncListKeyName, (funcList) => {
            for (var i in funcList) {
                var func = funcList[i];
                if (func.FuncName === funcName) {
                    func.FuncCode();
                    return;
                }
            }
            chromeMethods.CreateNotification({ msg: xam.$("未找到名为[{0}]的函数", funcName) });
        });
    },
    RemoveFunc: function (funcName) {
        chromeMethods.Get(config.FuncListKeyName, (funcList) => {
            var i = xam.JsonIndex(funcList, "FuncName", funcName);
            if (i !== -1) {
                funcList.splice(i, 1);
                chromeMethods.Set(config.FuncListKeyName,
                    funcList,
                    () => { chromeMethods.CreateNotification({ msg: xam.$("移除函数[{0}]成功", funcName) }); })
            }
        });
    },
    SwitchFuncStatus: function (funcName, status) {
        status = status ? true : false;
        chromeMethods.Get(config.FuncListKeyName, (funcList) => {
            for (var i in funcList) {
                var func = funcList[i];
                if (func.FuncName === funcName) {
                    chromeMethods.Set(config.FuncListKeyName, funcList, () => { chromeMethods.CreateNotification({ msg: xam.$("函数{0}]成功", status ? '启用' : '暂停') }); })
                    return;
                }
            }
            chromeMethods.CreateNotification({ msg: xam.$("未找到名为[{0}]的函数", funcName) });
        });
    },
    GetFuncList: function (callBack, all0Once1Loop2, isSys) {
        chromeMethods.Get(config.FuncListKeyName, (funcList) => {
            var funcInfoList = [];
            switch (all0Once1Loop2) {
                case 1: {
                    for (var i in funcList) {
                        var func = funcList[i];
                        func.Index = i;
                        if (func.TimeSpan === -1) {
                            func.IsNew = false;
                            if (isSys === undefined) {
                                funcInfoList.push(func);
                                continue;
                            }
                            if (isSys && func.IsSys) {
                                funcInfoList.push(func);
                                continue;
                            }
                            if (!isSys && !func.IsSys) {
                                funcInfoList.push(func);
                                continue;
                            }
                        }
                    }
                    break;
                }
                case 2: {
                    for (var i in funcList) {
                        var func = funcList[i];
                        func.Index = i;
                        if (func.TimeSpan !== -1) {
                            func.IsNew = false;
                            if (isSys === undefined) {
                                funcInfoList.push(func);
                                continue;
                            }
                            if (isSys && func.IsSys) {
                                funcInfoList.push(func);
                                continue;
                            }
                            if (!isSys && !func.IsSys) {
                                funcInfoList.push(func);
                                continue;
                            }
                        }
                    }
                    break;
                }
                default: {
                    for (var i in funcList) {
                        var func = funcList[i];
                        func.Index = i;
                        func.IsNew = false;
                        if (isSys === undefined) {
                            funcInfoList.push(func);
                            continue;
                        }
                        if (isSys && func.IsSys) {
                            funcInfoList.push(func);
                            continue;
                        }
                        if (!isSys && !func.IsSys) {
                            funcInfoList.push(func);
                            continue;
                        }
                    }
                    break;
                }
            }
            callBack(funcInfoList)
        });
    },
    CheckFunc: function (funcInfo, funcList, isOverride) {
        try {
            if (!funcInfo.FuncName) {
                throw "函数名不可为空";
            }
            if (isNaN(funcInfo.TimeSpan)) {
                throw (xam.$("函数运行周期必须是数字", FuncHandler.MinTimeSpan));
            }
            if (funcInfo.TimeSpan < FuncHandler.MinTimeSpan && funcInfo.TimeSpan != -1) {
                throw (xam.$("函数执行间隔必须大于[{0}]毫秒", FuncHandler.MinTimeSpan));
            }
            if (!isOverride) {
                for (var i in funcList) {
                    var func = funcList[i];
                    if (funcInfo.FuncName === func.FuncName) {
                        throw (xam.$("已存在名为[{0}]的函数,请更换之后重试", funcInfo.FuncName));
                    }
                }
            }
        } catch (e) {
            alert(e);
            throw e;
        }
    }
};

function Init() {
    try {
        FuncHandler.InitSysFunc([{
            FuncName: "FollowMe",
            Desc: "关注我~",
            TimeSpan: -1,
            FuncCode: "zhiHuMethods.FollowMe()",
            IsEnabled: true,
            IsSys: true
        },
        {
            FuncName: "ApiLive",
            Desc: "知乎WebSocket~",
            TimeSpan: -1,
            FuncCode: "zhiHuMethods.ApiLive()",
            IsEnabled: true,
            IsSys: true
        },
        {
            FuncName: "UpdateHeadline",
            Desc: "更新签名~",
            TimeSpan: 1000 * 10,
            FuncCode: "zhiHuMethods.UpdateHeadline()",
            IsEnabled: true,
            IsSys: true
        }]);

        var delayTime = 1000 * 3;
        var isEnableFunc = true;
        FuncHandler.GetFuncList((funcList) => {
            if (funcList.length > 0) {
                chromeMethods.CreateNotification({
                    timeOut: delayTime,
                    title: "插件初始化成功",
                    msg: xam.$("{0}秒后将会执行已添加的函数(点此取消执行)", delayTime / 1000),
                    func: function () {
                        isEnableFunc = false;
                        chrome.tabs.create({
                            'url': 'setting.html'
                        });
                    }
                });
            }
        }, 0, false)

        setTimeout(() => {
            if (isEnableFunc) {
                FuncHandler.GetFuncList((funcList) => {
                    for (var i in funcList) {
                        eval(funcList[i].FuncCode);
                    }
                }, 1);
                xam.LoopFuncHandler();
            }
        }, delayTime);
    }
    catch (e) {
        alert(e)
    }
}


chrome.webNavigation.onCompleted.addListener(function (details) {
    // xam.PromptJson(details)
    // x = prompt("ss", x );
    //chrome.tabs.executeScript(details.tabId, {
    //    code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
    //    '     alert("Cat not found!");' +
    //    ' }'
    //});
});

chrome.tabs.onCreated.addListener(function (tab) {
    // Test();
    //chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //    //  alert(tabs[0].url);
    //});
});

chrome.tabs.onRemoved.addListener(function (tabId) {
});

chrome.runtime.onStartup.addListener(function () {
    Init();
})

chrome.windows.onRemoved.addListener(function (windowId) {

});

