var config = { TimeOut: 1000 * 10, FollowerListKeyName: "FollowerList", LastIndex: "3fd5b44966f395c57508bada06398d88" };

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
        var pageCount = 20;//max 20
        $.ajax({
            url: "https://www.zhihu.com/api/v4/members/" + userInfo.url_token + "/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=0&limit=" + pageCount,
            type: "get",
            success: function (result) {
                var userIndex = JsonIndex(last20Follower, "id", config.LastIndex);
                userIndex = userIndex === -1 ? pageCount : userIndex;
                var followerList = chromeMethod.Get(config.FollowerListKeyName, function (items) {
                    var last20Follower = result.data;
                    var oldFollowerList = items[config.FollowerListKeyName] || [];
                    for (var x = 0; x < userIndex; x++) {
                        var user = last20Follower[x];
                        if (oldFollowerList.indexOf(user.id) === -1) {
                            zhiHuMethods.SendMsg("谢谢" + user.name + "你长得这么好看还关注我(ᶘ ᵒᴥᵒᶅ)", user.id)
                            oldFollowerList.push(user.id);
                        }
                    }
                    chromeMethod.Set(config.FollowerListKeyName, oldFollowerList);
                })
            }
        })
    },
    SendMsg: function (msgStr, id) {
        $.ajax({
            url: "https://www.zhihu.com/api/v4/messages",
            data: JSON.stringify(
                //{ type: "common", content: msgStr + " new User:" + id, receiver_hash: "bc4e3358ec777a1215cf466d65a1e884" }),
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

function PromptJson(obj, info) {
    info = info === undefined ? "" : info;
    prompt(info, JSON.stringify(obj));
}

chrome.tabs.onCreated.addListener(function (tab) {
    // zhiHuMethods.UpdateHeadline();
});
chrome.tabs.onRemoved.addListener(function (tabId) {
    console.log(tabId);
});

chrome.runtime.onStartup.addListener(function () {
    zhiHuMethods.UpdateHeadline();
})
chrome.windows.onRemoved.addListener(function (windowId) {

});

