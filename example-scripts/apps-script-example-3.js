/* gets the list of the events from your Google Calendar for the current day */
function sendCalEventsToEmail() {
    // create a new object of type Date; this will be passed in a method invoked on the CalendarApp service
    let todaysDate = new Date();

    // creates a list of events from Google Calendar; user's personal Gmail ID is hardcoded
    let eventsList = CalendarApp.getCalendarById("seanoberc@gmail.com").getEventsForDay(todaysDate);        // .getEventsForDay() get's todaysDate passed in as an argument
    // the default message is initialized here so that it's in scope for the following if statement
    let emailMessage = 'These are the events on your calendar for today: \n\n';

    // if there are no events for the day in the list, just print following
    if (eventsList.length === 0) {
        emailMessage = 'You have nothing scheduled today.';
    } else {
        // inspect each element in eventsList using a for each loop
        // append the event title and event start time to today's event element in the eventList
        for (let event in eventsList) {
            emailMessage += eventsList[event].getTitle() + '; starts at: ' + eventsList[event].getStartTime() + '\n';
        }
    }

    // Finally, 
    GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Today\'s Events', emailMessage);
}