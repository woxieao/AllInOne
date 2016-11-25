    var CreateElement = function CreateElement(info) {
        var code = info.Code === undefined ? "" : info.Code;
        var isScript = info.IsScript === undefined ? false : info.IsScript;
        var isEncode = info.IsEncode === undefined ? false : info.IsEncode;
        code = isEncode ? unescape(window.atob(code)) : code;
        var element;
        var myId = parseInt(Math.random() * 10000000000);
        var mainId = "main_" + myId;
        var scriptId = "script_" + myId;
        if (isScript) {
            element = document.createElement('script');
            element.innerHTML = code;
        } else {
            var divCss = info.Css === undefined ? "position:fixed; bottom:0; left:0;width:30%;height:250px;background-color:#DEB887;z-index:9999999" : info.Css;
            element = document.createElement('div');
            var title = info.Title === undefined ? "" : info.Title;
            element.innerHTML = "<div style=\"height:20px;width:100%\"><span style=\"float:left\">" + title
+ "</span><span style=\"cursor: pointer;float:right\" onclick=\"document.getElementById('" + scriptId + "').remove();document.getElementById('" + mainId + "').remove()\">X&nbsp;&nbsp; </span></div><div style=\"width:100%\">" + code + "</div>";
            element.style = divCss;
            var scriptList = element.getElementsByTagName("script");
            if (scriptList.length > 0) {
                var scriptCodeList = "";
                var tempScript = document.createElement('script');
                tempScript.id = scriptId;
                for (var i = 0; i < scriptList.length; i++) {
                    scriptCodeList += scriptList[i].innerHTML + "\n";
                }
                for (var i = 0; i < scriptList.length; i++) {
                    scriptList[i].remove();
                }
                tempScript.innerHTML = scriptCodeList;
                document.head.appendChild(tempScript);
            }
        };
        element.id = mainId;
        document.body.appendChild(element);
        return myId;
    }

    function EncodeCodeFunc(isJs) {
        var createElementStr = CreateElement.toString();
        var userCode = document.getElementById("sourceCode").value;
        var createElementEncodeStr = window.btoa(escape(createElementStr));
        var createElementScript = "eval(unescape(window.atob('" + createElementEncodeStr + "')));";
        var codResult = window.btoa(escape(userCode));
        var info = JSON.stringify({ Code: codResult, IsScript: isJs, IsEncode: true });
        var baseCode = "javascript:" + createElementScript + "CreateElement(" + info + ")";
        document.getElementById("encodeResult").value = baseCode;
    }

    function EncodeCodeAsShortCut() {
        var code = "<textarea style='width:99%;height:100px' placeholder='JS/Html(JS代码会替换回车为空格,请勿漏写\";\")' id='sourceCode'></textarea><br/>" +
            "<button style='float:left' onclick='EncodeCodeFunc(true)'>EncodeJsShortCut</button>" +
            "<button  style='float:right' onclick='EncodeCodeFunc(false)'>EncodeHtmlShortCut</button>" +
            "<textarea  placeholder='把转换后的内容新建为书签即可快捷使用脚本' onfocus='this.select()' style='width:99%;height:100px' id='encodeResult'></textarea>";
        CreateElement({ Code: code });
    }
    EncodeCodeAsShortCut();
