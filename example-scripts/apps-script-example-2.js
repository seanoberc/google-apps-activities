/* creates a custom menu in the Sheets UI and adds the insertDate function to that menu */

function onOpen() {
  let ui = SpreadsheetApp.getUi();      // inovke the .getUi() method on the global object, assign it all to a variable

  // use the ui object to create a new menu
  ui.createMenu('Custom Menu')          // passes in a name for the menu
    .addItem('Insert Date', 'insertDate')   // calls .addItem() method; first argument provides a name for the item & second argument provides our custom insertDate() func
    .addToUi()                          // method adds this stuff to our custom menu
  ;
}