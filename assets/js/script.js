// Displays the Day of the Week and the Date on the Jumbotron Header
var time = moment();
// LLLL format shows the day, date, and time (hour/minute)
$('#currentDay').text(time.format('LLLL'));

// Click event function to grab the values of "description" and Parent Div element
$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var textValue = $(this).siblings('.description').val();
        var timeKey = $(this).parent().attr('id');
        // Stores these values in Local Storage
        localStorage.setItem(timeKey, textValue);
      });
   
 // Get's data from Local Storage using id's 
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));
})

// This function takes the time from Moment to change the colors of time blocks to [past/present/future] styles
function changeColorTime() {
    // grabs the hour data from the Moment.js
    var hourNumber = time.hours();
  
    // if else statement to check each Time Block's hour# data after the "hour" id
    $('.time-block').each(function () {
      var hourID = parseInt($(this).attr('id').split("hour")[1]);
  
      // sets the Time Block to past if the number id is less than current hour
      if (hourID < hourNumber) {
        $(this).addClass('past');} 

      // sets the Time Block to present styling if the number id matches hour. Removes previous past/future style.
      else if (hourID === hourNumber) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');} 

      // / sets the Time Block to future styling if the number id matches hour. Removes previous past/present style.
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');}
    });
  }
  
// Calls the function to change the Time Blocks styling
changeColorTime();

// Updates the page every minute by replacing current URL with itself.
setTimeout(function () {
  location = '';
}, 1000 * 60);