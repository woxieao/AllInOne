var storage = chrome.storage.local;


chrome.extension.onMessage.addListener(function (request) {
    console.log(request);
});
chrome.runtime.sendMessage("test");
function Test() {
    chrome.tabs.create({
        'url': 'setting.html'
    });
    chrome.tabs.executeScript(details.tabId, {
        code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
        '     alert("Cat not found!");' +
        ' }'
    });
}


function injectScript(code) {
    chrome.tabs.create({ url: 'test.html' }, function (tab) {
        chrome.tabs.executeScript(tab.id, {
            code: code
        });
    });
};


var TestFunc;
function TestPage(code) {
    $.ajax({
        url: 'data:application/javascript,TestFunc={Test:function (){return 23}}',
        // dataType: "json",
        success: function (r) {
            console.log("succ");
            console.log(r);

        },
        error: function (r) {
            console.log("err");
            console.log(r)
        }
    })
}
chrome.webNavigation.onCompleted.addListener(function (details) {

});

chrome.tabs.onCreated.addListener(function (tab) {
    TestPage();
    //TestFunc.Test();
});

chrome.tabs.onRemoved.addListener(function (tabId) {
    //TestPage("2console.log(1)")

});

chrome.runtime.onStartup.addListener(function () {

})

chrome.windows.onRemoved.addListener(function (windowId) {

});

