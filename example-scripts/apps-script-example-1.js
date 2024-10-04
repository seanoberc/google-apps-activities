/* inserts a date into the next empty field in the Date column for a spreadhseet */
function insertDate() {
    // create a variable to hold an object of type SpreadsheetApp
    // this is the global object for Google Sheets; you can call methods on this object to use the built-in Apps Script services
    // invokes .getActiveSpreadsheet() and .getActiveSheet() on the istantiated sheet object (selects the open spreadsheet and the presently selected cell in that sheet)
    let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // dateColumn and nextRow will be used to "pick out" the bottom-most field of column B (selects the next blank cell in the Date column)
    let dateColumn = 2;                          // here, 2 represents column 'B' in Sheets
    let nextRow = sheet.getLastRow() + 1;       // calls the .getLastRow() method on the sheet object; the +1 increments from the most recently selected row to the next (empty) row
     
    let cell = sheet.getRange(nextRow, dateColumn);         // selects a cell using .getRange() and assigns that cell's value to a variable
    cell.setValue(new Date());                  // updates the data in the active cell with today's date
    cell.setNumberFormat("MM:dd:yyyy HH:mm");   // changes the format to datetime
  }