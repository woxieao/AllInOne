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
            var color=parseInt(Math.random()*1000);
            var divCss = info.Css === undefined ? "position:fixed; padding: 5px;bottom:0; left:0;width:35%;height:250px;background-color:#DEB"+color+";z-index:9999999" : info.Css;
            element = document.createElement('div');
            var title = info.Title === undefined ? "" : info.Title;
            element.innerHTML = "<div style=\"height:20px;width:100%\"><span style=\"float:left\">" + title
+ "</span><span style=\"cursor: pointer;float:right\" onclick=\"document.getElementById('" + scriptId + "').remove();document.getElementById('" + mainId + "').remove()\">X&nbsp;&nbsp; </span></div><div style=\"width:100%\">" + code + "</div>";
            element.style = divCss;
            var scriptList = element.getElementsByTagName("script");
            var tempScript;
            tempScript = document.createElement('script');
            tempScript.id = scriptId;
            if (scriptList.length > 0) {
                var scriptCodeList = "";
                for (var i = 0; i < scriptList.length; i++) {
                    scriptCodeList += scriptList[i].innerHTML + "\n";
                }
                for (var i = 0; i < scriptList.length; i++) {
                    scriptList[i].remove();
                }
                tempScript.innerHTML = scriptCodeList;
            }
        };
        element.id = mainId;
        document.body.appendChild(element);
        document.head.appendChild(tempScript);
        return myId;
    }

    function EncodeCodeFunc(isJs,me) {

        var createElementStr = CreateElement.toString();
        var userCode =document.getElementsByName("sourceCode")[document.getElementsByName("sourceCode").length-1].value;
        var createElementEncodeStr = window.btoa(escape(createElementStr));
        var createElementScript = "eval(unescape(window.atob('" + createElementEncodeStr + "')));";
        var codResult = window.btoa(escape(userCode));
        var info={ Code: codResult, IsScript: isJs, IsEncode: true };
        var infoStr = JSON.stringify(info);
        var baseCode = "javascript:" + createElementScript + "CreateElement(" + infoStr + ")";
        document.getElementsByName("encodeResult")[document.getElementsByName("encodeResult").length-1].value=baseCode;
        if(document.getElementsByName("showResult")[document.getElementsByName("showResult").length-1].checked)
        {
        info.Css="position:fixed; padding: 5px;bottom:0; right:0;width:35%;height:250px;background-color:yellowgreen;z-index:9999999"
        CreateElement(info);
        }
    }

    function EncodeCodeAsShortCut() {
        var code = "<textarea style='width:100%;height:100px' placeholder='JS/Html' name='sourceCode'></textarea><br/>" +
            "<button style='float:left' onclick='EncodeCodeFunc(true)'>EncodeJsShortCut</button>" +
            "ShowResult<input name='showResult' type='checkbox' checked='checked'/>"+
            "<button  style='float:right' onclick='EncodeCodeFunc(false)'>EncodeHtmlShortCut</button>" +
            "<textarea  placeholder='把转换后的内容新建为书签即可快捷使用脚本' onfocus='this.select()' style='width:100%;height:100px' name='encodeResult'></textarea>";
        CreateElement({ Code: code });
    }
    EncodeCodeAsShortCut();
