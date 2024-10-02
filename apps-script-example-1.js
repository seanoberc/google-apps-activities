function insertDate() {
    // create a variable to hold an object of type SpreadsheetApp
    // this is the global object for Google Sheets; you can call methods on this object to use the built-in Apps Script services
    // invokes .getActiveSpreadsheet() and .getActiveSheet() on the istantiated sheet object (selects the open spreadsheet and the presently selected cell in that sheet)
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // here, 2 represents column 'B' in Sheets
    // these objects will be used to "pick out" the bottom-most field of column B (selects the next blank cell in the Date column)
    let dateColumn = 2;
    
    // nextRow will be used to select the next empty row in Sheets
    let nextRow = sheet.getLastRow() + 1;       // calls the .getLastRow() method on the sheet object; the +1 increments from the most recently selected row to the next (empty) row
  
  
    
    // the cell object calls .getRang() on the open sheet; the two variables initialized above are provided as parameters    
let cell = sheet.getRange(nextRow, dateColumn);
    cell.setValue(new Date());                  // updates the data in the active cell with today's date
    cell.setNumberFormat("MM:dd:yyyy HH:mm");   // changes the format to datetime
  }
  