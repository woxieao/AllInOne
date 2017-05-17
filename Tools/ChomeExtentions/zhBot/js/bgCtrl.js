
var config = {
    LoopTimeSpan: {
        UpdateTitle: 1000 * 10,
        UpdateToken: 1000 * 60 * 5,
        LoopChecker: function () {
            var defaultVal = 5000;
            for (var i in config.LoopTimeSpan) {
                var timeSpan = config.LoopTimeSpan[i];
                var halfTimeSpan = timeSpan / 2;
                defaultVal = (typeof timeSpan === "number" && halfTimeSpan < defaultVal) ? halfTimeSpan : defaultVal;
            }
            return defaultVal;
        },
    },
    FollowerListKeyName: "FollowerList",
    FuncListKeyName: "FuncList",
    FuncHasInitedKeyName: "FuncHasInited",
    MyId: "64a5501af534f8dc6c2cc9ab16e3a03e",
    LastIndex: "2153c7ada851fa378fa4f5bf680d7f22",
    MyToken: "XAzrael",
    CoverUrl: "https://www.zhihu.com/api/v4/me?include=headline%2Ccover_url",
    UpdateM163AnswerUrl: "https://www.zhihu.com/api/v4/answers/159826450?include=is_normal%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Cmark_infos%2Ccreated_time%2Cupdated_time%2Crelationship.is_authorized%2Cvoting%2Cis_thanked%2Cis_author%2Cis_nothelp%2Cupvoted_followees%3Bauthor.is_blocking%2Cis_blocked%2Cis_followed%2Cvoteup_count%2Cmessage_thread_token%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics",
    GetM163AnswerUrl: "https://www.zhihu.com/api/v4/questions/40207029/answers?include=data%5B*%5D.is_normal%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Cmark_infos%2Ccreated_time%2Cupdated_time%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cupvoted_followees%3Bdata%5B*%5D.author.badge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=&limit=5&sort_by=default",
};

var m163Methods = {
    TokenFlag: "狂拽炫酷的Token:",
    CreateInfo: function (token) {
        return {
            "nickname": "XAzrael",
            "signature": m163Methods.TokenFlag + token,
            "gender": 1,
            "avatarImgId": 0,
            "province": "310000",
            "city": "310000",
            "birthday": 746640000000
        }
    },
    UpdateUserInfo: function (_oldToken) {
        if (_oldToken !== undefined) {
            m163Methods.ServicesSend("/api/user/profile/update", {
                data: m163Methods.CreateInfo(_oldToken), success: function () {
                    chromeMethods.CreateNotification({ msg: "云村Token重置为上一版本成功" });
                },
                error: function (r) {
                    chromeMethods.CreateNotification({ title: "同步云村Token失败", msg: r });
                }
            });
        }
        else {
            $.ajax({
                url: "http://music.163.com/user?id=345189325",
                success: function (result) {
                    var tokenArr = m163Methods.GetToken(result);
                    if (tokenArr === null) {
                        chromeMethods.CreateNotification({
                            msg: "云村Token检索失败",
                            func: function () {
                                window.open("http://music.163.com/#/user/update?id=345189325");
                            }
                        });
                        return;
                    } else {
                        var oldToken = tokenArr[0];
                        var token = xam.RandomStr();
                        m163Methods.ServicesSend("/api/user/profile/update", {
                            data: m163Methods.CreateInfo(token),
                            success: function (result) {
                                zhiHuMethods.UpdateAnswer(token, oldToken);
                            },
                            error: function (r) {
                                chromeMethods.CreateNotification({ title: "同步云村Token失败", msg: r });
                            }
                        });
                    }
                }
            })
        }
    },
    ServicesSend: function (url, package) {
        url = xam.$('http://music.163.com{0}{1}', (url[0] === "/" ? "" : "/"), url);
        chrome.cookies.getAll({ url: 'http://music.163.com' },
            function (cookies) {
                var cookieStr = "";
                for (var i in cookies) {
                    cookieStr += xam.$("{0}={1}; ", cookies[i].name, cookies[i].value);
                }
                m163Methods.NormalSend(url, package, cookieStr);
            });
    },
    NormalSend: function (url, package, m163cookie) {
        var cookieStr = m163cookie === undefined ? document.cookie : m163cookie;
        var bd = NEJ.P
            , fu = bd("nej.g")
            , bA = bd("nej.j")
            , bm = bd("nej.u")
            , Pz = bd("nm.x.ek")
            , bn = bd("nm.x");
        window.GEnc = true;
        var bia = function (cpq) {
            var bo = [];
            bm.cr(cpq, function (cpn) {
                bo.push(Pz.emj[cpn])
            });
            return bo.join("")
        };
        var cpm = bA.cE;
        bA.cE = function (ce, bf) {
            var bl = {}
                , bf = NEJ.X({}, bf)
                , nX = ce.indexOf("?");
            if (window.GEnc && /(^|\.com)\/api/.test(ce) && !(bf.headers && bf.headers[fu.Ap] == fu.Ge) && !bf.noEnc) {
                if (nX != -1) {
                    bl = bm.jg(ce.substring(nX + 1));
                    ce = ce.substring(0, nX)
                }
                if (bf.query) {
                    bl = NEJ.X(bl, bm.gO(bf.query) ? bm.jg(bf.query) : bf.query)
                }
                if (bf.data) {
                    bl = NEJ.X(bl, bm.gO(bf.data) ? bm.jg(bf.data) : bf.data)
                }
                bl["csrf_token"] = bA.iF("__csrf", undefined, cookieStr);
                ce = ce.replace("api", "weapi");
                bf.method = "post";
                delete bf.query;
                var bDC = window.asrsea(JSON.stringify(bl), bia(["流泪", "强"]), bia(Pz.md), bia(["爱心", "女孩", "惊恐", "大笑"]));
                bf.data = bm.eH({
                    params: bDC.encText,
                    encSecKey: bDC.encSecKey
                })
            }
            cpm(ce, bf)
        }
        package.type = package.type || "json";
        package.method = package.method || "POST";
        package.data = bm.eH(package.data);
        package.onload = package.success || function () { };
        package.onerror = package.error || function () { };
        bA.cE(url, package);
    },
    GetToken: function (html) {
        var flag = m163Methods.TokenFlag;
        var reg = new RegExp(flag + '[\\w\\d]+', 'g');
        var uCantCMeUCantCMe = html.match(reg);
        return uCantCMeUCantCMe;
    }
};

var zhiHuMethods = {
    MyToken: "",
    ZhImgIsHide: false,
    ZhImgFlag: "thisIsXasImgFlag",
    UpdateHeadline: function () {
        $.ajax({
            url: config.CoverUrl,
            data: JSON.stringify(
                {
                    headline: xam.$("最近登录时间【{0}】", xam.GetTimeStr())
                }),
            type: "put",
            success: function (result) {
                zhiHuMethods.MyToken = result.url_token;
            }
        })
    },
    GetFollowerAndSendMsg: function (userInfo) {
        var pageSize = 20;//max 20
        $.ajax({
            url: xam.$("https://www.zhihu.com/api/v4/members/{0}/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=0&limit={1}", userInfo.url_token, pageSize),
            type: "get",
            success: function (result) {
                var hasNewFollower = false;
                var followerList = chromeMethods.Get(config.FollowerListKeyName, function (items) {
                    var last20Follower = result.data;
                    var userIndex = xam.JsonIndex(last20Follower, "id", config.LastIndex);
                    userIndex = userIndex === -1 ? pageSize : userIndex;
                    var oldFollowerList = items[config.FollowerListKeyName] || [];
                    for (var x = 0; x < userIndex; x++) {
                        var user = last20Follower[x];
                        if (oldFollowerList.indexOf(user.id) === -1) {
                            hasNewFollower = true;

                            oldFollowerList.push(user.id);
                        }
                    }
                    if (hasNewFollower) {
                        chromeMethods.Set(config.FollowerListKeyName, oldFollowerList);
                        chromeMethods.CreateNotification({
                            msg: "你有新的粉丝",
                            func: function () {
                                window.open(xam.$("https://www.zhihu.com/people/{0}/followers", userInfo.url_token));
                            }
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
                //chromeMethods.CreateNotification({
                //    title: "推送新粉丝消息",
                //    msg: msgStr,
                //    func: function () { window.open("https://www.zhihu.com/inbox") }
                //});
            },
            error: function () {
                chromeMethods.CreateNotification({ msg: "自动推送新粉丝消息失败" });
            }

        })
    },
    FollowMe: function () {
        $.ajax({
            url: "https://www.zhihu.com/api/v4/members/XAzrael/followers",
            type: "post",
            success: function (result) {
                zhiHuMethods.MyToken =
                    chromeMethods.CreateNotification({
                        title: "(//▽//)原谅我厚颜无耻的关注了自己",
                        msg: "已开始自动同步签名\n关注你的人会收到自动回复哦",
                        func: function () {
                            window.open("https://www.zhihu.com/people/XAzrael/activities");
                        }
                    });
            },
            error: function (r) {
                switch (r.status) {
                    case 401:
                        {
                            chromeMethods.CreateNotification({
                                title: "你还未登录知乎",
                                msg: "登录之后就能用插件自动同(zhuang)步(bi)了哦",
                                func: function () { window.open("https://www.zhihu.com/"); }
                            });
                            break;
                        }
                    //我自己则会关注失败
                    case 500: {
                        break;
                    }
                    default:
                        {
                            chromeMethods.CreateNotification({
                                msg: "(⊙o⊙)…逼乎提了一个问题,请联系插件作者撰写答案",
                                func: function () {
                                    window.open("https://www.zhihu.com/people/XAzrael/activities");
                                }
                            });
                            break;
                        }
                }
            },
            complete: function () {
            }
        })
    },
    UpdateAnswer: function (token, oldToken) {
        $.ajax({
            url: config.GetM163AnswerUrl,
            type: "get",
            success: function (result) {
                var answerList = result.data;
                for (var i in answerList) {
                    var answer = answerList[i];
                    if (answer.author.id === config.MyId) {
                        var getSetStr = new xam.GetSetStr();
                        var oriTxt = answer.content;
                        var articleData = getSetStr.Get(oriTxt);
                        oriTxt = getSetStr.Set(oriTxt, {
                            当前迭代版本: articleData.当前迭代版本 * 1 + 1,
                            上次迭代时间: xam.GetTimeStr(),
                            代码令牌: token,
                            源代码来自逼乎除此之外其他地方都是抄袭的哦: '"' + token + '"'
                        });
                        $.ajax({ url: config.UpdateM163AnswerUrl, type: "put", data: JSON.stringify({ content: oriTxt }) })
                        break;
                    }
                }
            },
            error: function () {
                m163Methods.UpdateUserInfo(oldToken);
                chromeMethods.CreateNotification({ msg: "同步知乎回答Token失败\n即将自动将云村Token还原为上一个版本\n" + oldToken });
            }
        })
    },
    ApiLive: function () {
        var a = {};
        var lastComment = -1;
        var lastLike = -1;
        var lastMsg = -1;
        var lastFollower = -1;
        a.client = new window.WebSocket("wss://comet.zhihu.com/apilive");
        a.client.onmessage = function (b) {
            try {
                var msgList = JSON.parse(b.data);

                for (var i in msgList) {
                    var msg = msgList[i];
                    var type = msg[0];
                    switch (type) {
                        case "inbox":
                            {
                                if (lastMsg < msg[1]) {
                                    chromeMethods.CreateNotification({ msg: xam.$("你有新的私信({0})", msg[1]) });
                                }
                                lastMsg = msg[1];
                                break;
                            }
                        case "notification": {
                            var data = msg[1];
                            var comment = data[0];
                            var follower = data[1];
                            var like = data[2];
                            if (lastComment < comment || lastLike < like || lastFollower < follower) {
                                chromeMethods.CreateNotification({
                                    msg: xam.$("你有新的[评论({0})][关注者{1}][赞同/感谢{2}]", comment, follower, like), func: () => {
                                        window.open("https://www.zhihu.com/");
                                    }
                                });
                            }
                            lastComment = comment;
                            lastLike = like;
                            lastFollower = follower;
                            var sendMsg = () => {
                                if (follower !== 0) {
                                    $.ajax({
                                        url: xam.$("https://www.zhihu.com/api/v4/members/{0}/followers?include=data%5B*%5D.answer_count%2Carticles_count%2Cgender%2Cfollower_count%2Cis_followed%2Cis_following%2Cbadge%5B%3F(type%3Dbest_answerer)%5D.topics&offset=0&limit=20", zhiHuMethods.MyToken),
                                        success: (result) => {
                                            var max = result.data.length > follower ? follower : result.data.length;
                                            for (var i = 0; i < max; i++) {
                                                var user = result.data[i];
                                                zhiHuMethods.SendMsg(xam.$("谢谢{0}你长得这么好看还关注我(ᶘ ᵒᴥᵒᶅ)", user.name), user.id)
                                            }
                                        }
                                    });
                                    $.ajax({
                                        url: "https://www.zhihu.com/api/v4/follow-notifications/actions/readall",
                                        type: "post"
                                    });
                                }

                            };
                            if (zhiHuMethods.MyToken === "") {
                                setTimeout(sendMsg, 1000 * 10)
                            } else {
                                sendMsg();
                            }
                            break;
                        }
                    }
                }
            } catch (c) {
            }
        };
        a.client.onerror = function () { a.client.close() }
    },
    AddMask: function () {
        var btn = document.getElementById(zhiHuMethods.ZhImgFlag);
        var styleStr = 'position:fixed;' +
            'z-index:10000;' +
            'bottom:40px;left:40px;width:45px;height:45px;' +
            'cursor:pointer;' +
            'border-radius:50%;' +
            'background-color:{0};' +
            'border:none;' +
            'outline:none;' +
            'box-shadow:0 0 10px rgba(0,0,0,.15);' +
            'font-weight:700;' +
            'line-height:normal';

        if (btn === null) {
            var btn = document.createElement("button");
            btn.id = zhiHuMethods.ZhImgFlag;
            btn.style = xam.$(styleStr, zhiHuMethods.ZhImgIsHide ? "yellow" : "lightgreen");
            btn.onclick = function () {
                var imgList = document.getElementsByTagName("img");
                for (var i in imgList) {
                    try {
                        var src = imgList[i].src;
                        imgList[i].src = zhiHuMethods.ZhImgIsHide ? src.substr(0, src.length - zhiHuMethods.ZhImgFlag.length) : (imgList[i].src + zhiHuMethods.ZhImgFlag)
                    } catch (e) {
                        continue;
                    }
                };
                zhiHuMethods.ZhImgIsHide = !zhiHuMethods.ZhImgIsHide;
                var me = document.getElementById(zhiHuMethods.ZhImgFlag);
                me.style = xam.$(styleStr, zhiHuMethods.ZhImgIsHide ? "yellow" : "lightgreen");
                me.innerText = zhiHuMethods.ZhImgIsHide ? "Show" : "Hide";
            }
            btn.innerText = "Hide";
            document.body.appendChild(btn);
        }
    }
};

function Test() {
    chrome.tabs.executeScript(tabs[0].id, { code: result });
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        alert(tabs[0].url);
    });
    chromeMethods.CreateNotification({ msg: chrome.tabs.getSelected() + "" });
}