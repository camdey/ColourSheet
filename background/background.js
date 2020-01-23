chrome.browserAction.onClicked.addListener(function(tab) {
    runGScript();
});


function runGScript() {
    scriptUrl = "https://script.google.com/a/izettle.com/macros/s/AKfycbzEpDlxiwOGYjew-OK0u2CurwfUm3fMy-1Jy9J2Gf34pnOoUnE/exec"
    fetch(scriptUrl).then(r => r.text()).then(result => {
        sheetUrl = result;
        // open sheet in new tab
        chrome.tabs.create({url: sheetUrl});

        console.log("Executed script at:");
        console.log(scriptUrl);
        console.log("sheetUrl");
        console.log(sheetUrl);
    })
}
