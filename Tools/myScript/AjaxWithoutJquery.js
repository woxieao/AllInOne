    function CallAjax(info) {
        info.type = info.type === undefined ? "GET" : info.type;
        info.getResult = info.getResult === undefined ? () => { } : info.getResult;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open(info.type, info.url, true);
        for (var i in info.header) {
            xmlhttp.setRequestHeader(info.header[i].key, info.header[i].value);
        }
        xmlhttp.send(info.data);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4) {
                info.getResult(xmlhttp)
                info.complete(xmlhttp.responseText);
            }
        };
    }