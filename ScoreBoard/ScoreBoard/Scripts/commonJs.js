$common = {};
$common.GetQuery = function (name) {
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
}
$common.WeChatLogin = function () {
    location.href = window.location.hostname.toLowerCase() !== "jf.xinstudy.cn" ?
        "/Home/FakeWeChatInterface?tarUrl=" + encodeURIComponent("/Home/GetUserWeChatInfo") :
        "http://wx.xinstudy.cn/checkUser.htm?tarURL=" + encodeURIComponent(location.host + "/Home/GetUserWeChatInfo");
}

$common.CallByValue = function (obj, ignoreField) {
    ignoreField = ignoreField ? ignoreField : [];
    if ($.isPlainObject(obj) || $.isArray(obj)) {
        var newObj = {};
        for (var i in obj) {
            if (ignoreField.indexOf(i) === -1 && i !== "$$hashKey") {
                if ($.isPlainObject(obj[i]) || $.isArray(obj[i])) {
                    newObj[i] = $common.CallByValue(obj[i], ignoreField);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
        return newObj;
    } else {
        return obj;
    }
}

$common.CheckInt = function (obj, name) {
    if ($.isNumeric(obj) && obj % 1 === 0) {
        //坑爹的 数字+一个小数点 js可以通过后台不能通过
        return obj * 1;
    }
    var msg = (name ? name : "输入的值") + "需为整数";
    layer.alert(msg);
    throw (msg);
}

$common.CheckEmpty = function (obj, name) {
    if (obj) {
        return;
    }
    var msg = (name ? name : "输入的值") + "不能为空";
    layer.alert(msg);
    throw (msg);
}

$common.PlayBoomMusic = function () {
    var audio = new Audio("/Resources/boom.mp3");
    audio.play();
}

$common.CreateQrCodeUrl = function (str) {
    return "/api/QRCode?base64Str=" + btoa(str);
}

