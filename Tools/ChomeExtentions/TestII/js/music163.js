
var Music163 = function () {
    try {
        clear();
    }
    catch (e) {
        console.log("推荐使用Chrome浏览器哦!");
    };
    //↓163 code 已和谐↓
    function sendPackage(songId) {
        try {
            //伪代码
            if (new Date() * 1 % 20 === 1) {
                throw "假装网络请求失败..."
            }
        }
        catch (e) {
            console.log("Oops~ looks something went wrong T_T");
            console.log(e);
        }
    }

    //↓my code↓
    var iGuessUDontKnowHow2WriteJs, specifySongId;
    var canRun = true;
    var songFlag = 25730000;
    var lastSongIdKeyName = "LastSongIdKeyName";
    var currentIndex = 0;
    var times = 0;
    var preCount;
    var base = this;
    var removeMeIfUCan = { 源代码来自逼乎除此之外其他地方都是抄袭的哦: "2itfm0970pt" };
    var valueList = ["JUU0JUJEJUEwJUU0JUJEJUJGJUU3JTk0JUE4JUU3JTlBJTg0JUU0JUJCJUEzJUU3JUEwJTgxJUU1JUI3JUIyJUU4JUJGJTg3JUU2JTlDJTlGJTJDJUU2JUJBJTkwJUU0JUJCJUEzJUU3JUEwJTgxQnklMjBYQX4=",
        "aHR0cHMlM0ElMkYlMkZ3d3cuemhpaHUuY29tJTJGcXVlc3Rpb24lMkY0MDIwNzAyOSUyRmFuc3dlciUyRjE1OTgyNjQ1MA==",
        "JUU2JUJBJTkwJUU0JUJCJUEzJUU3JUEwJTgxJUU2JTlEJUE1JUU4JTg3JUFBJUU3JTlGJUE1JUU0JUI5JThFJTIwQnklMjBYQQ==",
        false,
        "JUU4JUFGJUI3JUU1JThCJUJGJUU0JUJEJUJGJUU3JTk0JUE4JUU3JTlCJTk3JUU3JTg5JTg4JUU4JUJEJUFGJUU0JUJCJUI2LSUyMF8lMjAt",
        "VG9rZW4lRTYlQTAlQTElRTklQUElOEMlRTUlQjAlOUElRTYlOUMlQUElRTklODAlOUElRTglQkYlODclMkMlRTglQUYlQjclRTclQUQlODklRTUlQkUlODUlRTklODAlOUElRTglQkYlODclRTYlODglOTYlRTUlODglQjclRTYlOTYlQjAlRTklQTElQjUlRTklOUQlQTIlRTklODclOEQlRTglQUYlOTU=",
        "JUU2JUFEJUEzJUU1JTlDJUE4JUU2JUEwJUExJUU5JUFBJThDVG9rZW4lRTYlOTglQUYlRTUlOTAlQTYlRTglQkYlODclRTYlOUMlOUYuLg==",
        "VG9rZW4lRTYlQTAlQTElRTklQUElOEMlRTUlQUUlOEMlRTYlODglOTAlMkMlRTQlQkQlQTAlRTclOTQlQTglRTclOUElODQlRTYlOTglQUZYQSVFNSU4RSU5RiVFNSU4OCU5QiVFNCVCQiVBMyVFNyVBMCU4MSVFNSU5MyVBNiElMjAlM0MoJUVGJUJGJUEzJUVGJUI4JUI2JUVGJUJGJUEzKSVFMiU4NiU5NyU1QkdPISU1RA=="];

    this.RunOrStop = function () {
        canRun = !canRun
        if (canRun) {
            handleProcess(mainRun);
        }
        return canRun ? "已开始!" : "已暂停!";
    }

    if (!confirm("免责声明\n该脚本仅作技术交流用,请勿用作奇怪的用途\n刷歌有风险,封号什么的...T_T也不要怪我..")) {
        console.log("你取消了操作!!!!!!!!!");
        return;
    } else {
        console.log("这个版本网易在修复代码好像起飞不了了,先把框架写好,到时能刷我再更新代码");
        console.log("↖ 先假装能起飞 ↗ ( ´°̥̥̥̥̥̥̥̥ω°̥̥̥̥̥̥̥̥`) ");
        console.log(StrFromBase64(valueList[2]) + " " + StrFromBase64(valueList[1]));
    }
    function StrFromBase64(base64Str) {
        return decodeURIComponent(atob(base64Str));
    }

    function hellN0() {
        if (!iGuessUDontKnowHow2WriteJs) {
            alert(StrFromBase64(valueList[0]));
            location.href = StrFromBase64(valueList[1]);
            throw StrFromBase64(valueList[4]);
        }
    }

    function handleProcess(func0) {
        try {
            func0();
        } catch (e) {
            console.log(e)
        }
    }

    function run() {
        var currentSongId;
        for (var i = 0; i < preCount; i++ , currentIndex++) {
            currentSongId = specifySongId === undefined ? songFlag + xam.RandomNum(10000000) : specifySongId;
            sendPackage(currentSongId);
        }
        setTimeout(function () {
            hellN0(); handleProcess(mainRun);
        }, 100);

        function ThrowMsg(i, s) {
            throw xam.$("正在刷第[{i}]首歌,歌曲ID[{s}]],别忘了给我点赞啊哈哈哈,再来个关注更是极好的（//▽//）")
        }
        ThrowMsg(currentIndex, currentSongId);
    }
    function mainRun() {
        if (iGuessUDontKnowHow2WriteJs === undefined) {
            alert(StrFromBase64(valueList[5]));
            return;
        }
        while (currentIndex < times && canRun) {
            run()
        }
        console.log("All Done!")
        base.Help();
    }
    this.Help = function () {
        console.log("Tips:");
        console.log("(1)输入 m163.Start(10000) 即可开始随机刷10000首");
        console.log("(2)输入 m163.Start(10000,25730836) 即可刷ID为25730836的歌*10000 比如这个地址最后的参数就是歌曲ID http://music.163.com/#/song?id=25730836 (最近比较喜欢的一首歌)");
        console.log("(3)输入 m163.RunOrStop() 即可开始/暂停刷歌");
        console.log("(4)敲黑板,划重点 XA的云村链接  http://music.163.com/#/user/home?id=345189325 都是好听的歌,要是谁和我的喜好相似度80%以上请和我交朋友!!");
    }

    this.Start = function (count, someSong) {
        currentIndex = 0;
        specifySongId = someSong;
        times = count;
        preCount = preCount > count ? count : 200;
        console.log(StrFromBase64(valueList[6]));
        xam.CallAjax({
            url: "http://music.163.com/user?id=345189325",
            complete: function (result) {
                var uCantCMeUCantCMe = m163Methods.GetToken(result);
                if (uCantCMeUCantCMe === null) {
                    alert("匹配Token失败,请联系作者,非常感谢!");
                    return;
                }
                var tVal;
                for (var i in removeMeIfUCan) {
                    tVal = removeMeIfUCan[i];
                    break;
                }
                iGuessUDontKnowHow2WriteJs = uCantCMeUCantCMe[0].replace(m163Methods.TokenFlag, "") === tVal;
                callBackFunc = iGuessUDontKnowHow2WriteJs ? function () {
                    console.log(StrFromBase64(valueList[7]));
                    handleProcess(mainRun)
                } : hellN0;
                callBackFunc();
            }
        })
    }
}