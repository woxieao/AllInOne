
    function GetNowTime() {
        function formatNum(num) {
            return num < 10 ? "0" + num : num;
        }
        var nowTime = new Date();
        return nowTime.getFullYear() + "-" + formatNum(nowTime.getMonth() + 1) + "-" + formatNum(nowTime.getDate()) + " " + formatNum(nowTime.getHours()) + ":" + formatNum(nowTime.getMinutes());
    }

    function CallAjax(info) {
        info.type = info.type === undefined ? "GET" : info.type;
        info.getResult = info.getResult === undefined ? () => { } : info.getResult;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(info.type, info.url, true);
        for (var i in info.header) {
            xmlhttp.setRequestHeader(info.header[i][0], info.header[i][1]);
        }
        xmlhttp.send(info.data);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4) {
                info.getResult(xmlhttp)
                info.complete(xmlhttp.responseText);
            }
        };
    }

    function Tada() {
        CallAjax({
            url: "https://www.zhihu.com/people/edit", complete: (result) => {
                var myInfo = document.createElement('div');
                myInfo.innerHTML = result;
                myInfo.style = "display:none";
                document.body.appendChild(myInfo);
                var dataInfo = JSON.parse(document.getElementById("data").getAttribute("data-state"));
                myInfo.remove();
                var auth = ["Authorization",  "Bearer " + dataInfo.token.zc0 ];
                CallAjax({
                    url: "https://www.zhihu.com/people/XAzrael/followers",
                    complete: function (result) {
                        var followers = document.createElement('div');
                        followers.innerHTML = result;
                        var ele = followers.getElementsByClassName("zg-gray-normal");
                        var followersCount = ele[1].parentNode.getElementsByTagName("strong")[0].innerHTML;
                        var timeStr = GetNowTime();
                        CallAjax({
                            url: "https://www.zhihu.com/api/v4/me?include=headline%2Ccover_url",
                            type: "put",
                            data: '{"headline":"哔~【' + timeStr + '】(车上乘客:' + followersCount + '名)"}',
                            header: [auth],
                            complete: function () {
                                setTimeout(Tada, 60000);
                            }
                        });
                    }
                });
            }
        });
    }
    Tada();