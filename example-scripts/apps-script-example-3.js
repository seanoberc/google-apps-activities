function calSummaryToEmail() {
    let date = new Date();
    date.formatDate();
    let eventsList = CalendarApp.getDefaultCalendar().getEventsForDay(date);
    let emailMessage = 'These are the events on your calendar for today, ' + date + ':\n';

    if (eventsList.length === 0) {
        emailMessage = 'You have nothing scheduled today.';
    } else {
        for (let event in eventsList) {
            emailMessage += eventsList[event].getTitle() + '; starts at: ' + eventsList[event].getStartTime() + '\n';
        }
    }

    MailApp.sendEmail(Session.getActiveUser().getEmail(), 'Today\'s Events', emailMessage);
}

function formatDate() {
    let date = new Date();
    
    // Get day of the week, month, day with suffix, and year
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let dayOfWeek = daysArr[date.getDay()];
    let month = monthsArr[date.getMonth()];
    let day = date.getDate();
    
    let formattedDate = dayOfWeek + ", " + day + month;
    
    Logger.log(formattedDate); // Outputs: Monday, 15 January
    return formattedDate;
  }
  