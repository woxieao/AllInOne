

chrome.webNavigation.onCompleted.addListener(function (details) {
    // xam.PromptJson(details)
    // x = prompt("ss", x );
    //chrome.tabs.executeScript(details.tabId, {
    //    code: ' if (document.body.innerText.indexOf("Cat") !=-1) {' +
    //    '     alert("Cat not found!");' +
    //    ' }'
    //});
});

chrome.tabs.onCreated.addListener(function (tab) {

});

chrome.tabs.onRemoved.addListener(function (tabId) {
    eval("console.log(1)");
});

chrome.runtime.onStartup.addListener(function () {

})

chrome.windows.onRemoved.addListener(function (windowId) {

});

