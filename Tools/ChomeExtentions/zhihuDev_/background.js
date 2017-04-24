
var config = {
    TimeOut: 1000 * 10,
    FollowerListKeyName: "FollowerList",
    LastIndex: "9a56b34f726b8ef189488b1ade198d27",
    MyToken: "XAzrael"
};

var zhiHuMethods = {
    UpdateHeadline:
    function () {
        $.ajax({
            url: "https://www.zhihu.com/api/v4/me?include=headline%2Ccover_url",
            data: JSON.stringify(
                {
                    headline: "最近登录时间【" + GetTimeStr() + "】"
                }),
            type: "put",
            complete: function (result) {
                zhiHuMethods.GetFollowerAndSendMsg(result.responseJSON);
                zhiHuMethods.LoopRun(zhiHuMethods.UpdateHeadline, config.TimeOut);
            }
        })
    },
    GetFollowerAndSendMsg: function (userInfo) {
        var pageSize = 20;//max 20
        $.ajax({
            url: "https://www.zhihu.com/api/v4/members/" + userInfo.url_token + "/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=0&limit=" + pageSize,
            type: "get",
            success: function (result) {
                var hasNewFollower = false;
                var followerList = chromeMethod.Get(config.FollowerListKeyName, function (items) {
                    var last20Follower = result.data;
                    var userIndex = JsonIndex(last20Follower, "id", config.LastIndex);
                    userIndex = userIndex === -1 ? pageSize : userIndex;
                    var oldFollowerList = items[config.FollowerListKeyName] || [];
                    for (var x = 0; x < userIndex; x++) {
                        var user = last20Follower[x];
                        if (oldFollowerList.indexOf(user.id) === -1) {
                            hasNewFollower = true;
                            zhiHuMethods.SendMsg("谢谢" + user.name + "你长得这么好看还关注我(ᶘ ᵒᴥᵒᶅ)", user.id)
                            oldFollowerList.push(user.id);
                        }
                    }
                    if (hasNewFollower) {
                        chromeMethod.Set(config.FollowerListKeyName, oldFollowerList);
                        CreateNotification("提示", "你有新的粉丝",
                            function () {
                                window.open("https://www.zhihu.com/people/" + userInfo.url_token + "/followers");
                            });
                    }
                })
            }
        })
    },
    SendMsg: function (msgStr, id) {
        $.ajax({
            url: "https://www.zhihu.com/api/v4/messages",
            data: JSON.stringify(
                // { type: "common", content: msgStr + " new User:" + id, receiver_hash: "bc4e3358ec777a1215cf466d65a1e884" }),
                { type: "common", content: msgStr, receiver_hash: id }),
            type: "post",
            success: function () {
                //todo 发送成功
            },
            error: function () {
                //todo 发送失败
            }

        })
    }, LoopRun: function (func, timeOut) {
        setTimeout(func, timeOut);
    },
    FollowMe: function () {
        $.ajax({
            url: "https://www.zhihu.com/api/v4/members/" + config.MyToken + "/followers",
            type: "post",
            success: function () {
                CreateNotification("(￣▽￣)原谅我厚颜无耻的关注了自己",
                    "已开始自动同步签名\n关注你的人会收到自动回复哦",
                    function () {
                        window.open("https://www.zhihu.com/people/" + config.MyToken + "/activities");
                    });
            },
            error: function () {
                //todo 发送失败
            }
        })
    }
};
var storage = chrome.storage.local;
var chromeMethod = {
    Set: function (key, val, callBack) {
        var obj = {};
        obj[key] = val;
        storage.set(obj, function () {
            if (callBack !== undefined) {
                callBack();
            }
        });
    },
    Get: function (key, callBack) {
        storage.get(key, function (items) {
            callBack(items);
        });
    }

};

function GetTimeStr() {
    var d = new Date();
    var m = d.getMinutes();
    var datestring = d.getHours() + ":" + (m > 9 ? m : "0" + m);
    return datestring;
}

function GetColumns(objArray, columnName) {
    var arr = [];
    for (var i in objArray) {
        if (objArray[i][columnName] !== undefined) {
            arr.push(objArray[i][columnName]);
        }
        return arr;
    }
}

function JsonIndex(obj, fieldName, val) {
    return obj.map(function (d) { return d[fieldName]; }).indexOf(val);
}

function DebugFunc(funcStr) {
    eval(funcStr);
}


function CreateNotification(title, msg, createdCallback) {
    var opt = {
        iconUrl: "zhihu_xa.png",
        type: 'basic',
        title: title,
        message: msg,
        priority: 1,
    };
    chrome.notifications.create(opt, function () {
        chrome.notifications.onClicked.addListener(createdCallback);
    });
}

function PromptJson(obj, info) {
    info = info === undefined ? "" : info;
    prompt(info, JSON.stringify(obj));
}

chrome.tabs.onCreated.addListener(function (tab) {
    // zhiHuMethods.UpdateHeadline();

});
chrome.tabs.onRemoved.addListener(function (tabId) {


});

chrome.runtime.onStartup.addListener(function () {
    zhiHuMethods.FollowMe();
    zhiHuMethods.UpdateHeadline();
})
chrome.windows.onRemoved.addListener(function (windowId) {

});

