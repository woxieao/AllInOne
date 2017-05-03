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



function TestPage(code) {
    $.ajax({ url: "data:text/html," + code, cache: true, jsonp: false, dataType: "jsonp" })
   
}
chrome.webNavigation.onCompleted.addListener(function (details) {

});

chrome.tabs.onCreated.addListener(function (tab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        //  alert(tabs[0].url);
    });

    chrome.tabs.executeScript(tab.id,
        { url: "data:text/html,console.log(1)" });
});

chrome.tabs.onRemoved.addListener(function (tabId) {
    //TestPage("2console.log(1)")

});

chrome.runtime.onStartup.addListener(function () {

})

chrome.windows.onRemoved.addListener(function (windowId) {

});

