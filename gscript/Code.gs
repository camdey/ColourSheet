function doGet() {
  // create new sheet with date in name, remove timezone from end
  var localTime = new Date().toLocaleString().substring(0, 24)
  var newSS = SpreadsheetApp.create("NewSheet: " + localTime);
  var ssURL = (newSS.getUrl());
  //  Logger.log(ssURL);

  // get ID from URL and remove 'd/' at start of string
  ssId = ssURL.match('(d/([^/]*))')[0].substring(2);

  // open sheet (server side only)
  var newSS = SpreadsheetApp.openById(ssId);
  //  Logger.log(newSS.getName());

  // makes the new spreadsheet the active spreadsheet
  var activeSS = SpreadsheetApp.openById(ssId);
  SpreadsheetApp.setActiveSpreadsheet(activeSS);

  // makes the 1st sheet active in the active spreadsheet.
  SpreadsheetApp.setActiveSheet(activeSS.getSheets()[0]);

  loadColours();

  //  return ssURL to chrome extension;
  return ContentService.createTextOutput(ssURL);
}

function loadColours() {
  var activeSheet = SpreadsheetApp.getActiveSheet();

  activeSheet.getRange(1,1,1,3).setValues([
    [ "Light", "Primary", "Dark"]
  ]);
  activeSheet.getRange(2,1,5,3).setBackgrounds([
    ["#2a4b89","#283663","#1e2649"],
    ["#b5a8e5","#a391e0","#8c7cc4"],
    ["#ffa08e","#f5826b","#e36c54"],
    ["#a6e3ba","#89d6a3","#72c48e"],
    ["#ebebeb","#dcdcdc","#a6a6a6"],
  ])
}
