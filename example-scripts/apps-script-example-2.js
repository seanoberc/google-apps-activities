/* creates a custom menu in the Google Forms UI */
function onOpen() {
  // uses the Forms service to get the UI object and save it to a variable
  let ui = FormApp.getUi();

// invokes method on the UI object to create a new menu named 'custom menu'
  ui.createMenu('Custom Menu')
    .addItem('Generate Form Questsions', 'generateCommonQuestions')       // passes in the title of the menu item and the name of the function to be run
    .addToUi();
}

/* generates the questions for the form */
function generateCommonQuestions() {
  // gets the current active form using the Forms service for Google Script
  let form = FormApp.getActiveForm();

  /* the following adds items to the form and chains methods to set the name of each item and whether or not particular data are required by the form */
  form.addTextItem()
    .setTitle('Name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email')
    .setRequired(true);

  // phone number will not be a required field unlike the two above
  form.addTextItem()
    .setTitle('Phone Number')
    .setRequired(false);

  // instantiates a variable to hold a mutliple choice item for the form
  let multiChoiceItem = form.addMultipleChoiceItem();
  form.addMultipleChoiceItem()                          // sets the title for this item and then creates the names of the different choices by passing in an array
    .setTitle('Preferred Contact Method')
    .setChoices(
      [
        multiChoiceItem.createChoice('Email'),
        multiChoiceItem.createChoice('Text Message')
      ]
    ).setRequired(true);

    // alers the person making the form that the questions have been successfully created
    FormApp.getUi().alert('Common questions have been generated for this form.');
}