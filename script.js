
//TODO: Set current date in top p tag

var today = moment().format('MMMM Do YYYY, H:mm a');
    // console.log(today);
var currentDay = moment().format('l');
//Create Current day at top of page
$("#currentDay").text(today);
var currentTime = Number(moment().format('H'));
    // console.log(currentTime);
//TODO:// Create an Array to Save Events
var savedEvents = [];
var task = {
    eventTime: " ",
    eventDescription:  " ",
    eventDay: " "
}


//TODO: Create grid and buttons to save
todayEvents();
function todayEvents() {
for (var i = 9; i < 18; i++) {
    var ampm = " ";
    //Creating elements for each variable and setting classes and attibutes
    if (i >= 12) {
        ampm = "PM";
    }
    else if (i < 12) {
        ampm = "AM";
    }
    var startingHour = i + ampm;

        // console.log(i);
        // console.log(startingHour);
    //Create Row for each event
    var hour = $("<section>").addClass("row time-block");
    //Create Hour col
    var time = $("<div>").addClass("col-md-1 hour font-weight-bold");
    //Create descrition text area
    var userEvent = $("<textarea>").addClass("col-md-8 description").attr("id", i + ampm);
    //Create button
    var save = $("<button>").addClass("col-md-1 saveBtn");
    //Create icon
    var btn = $("<i>").addClass("far fa-save").attr( "i", "hover");
    //Create color code for past/present/future
    if (i < currentTime) {
        userEvent.addClass("past");
    }
    else if (i > currentTime) {
        userEvent.addClass("future");
    }
    else {
        userEvent.addClass("present");
    }
    
    //Appending each element to the page
    save.append(btn);
    time.text(startingHour);
    hour.append(time);
    hour.append(userEvent);
    hour.append(save);
    
    $(".container").append(hour);

}}

//TODO: Save click event to localstorage
$(".container").on("click", '.saveBtn', function (event) {
    var textArea = $(this).siblings('textarea').val().trim();
    var timeArea = $(this).siblings('div').text();
    var theDay = moment().format('l');
        // console.log(textArea);
        // console.log(timeArea);
        // console.log(theDay);
    
    // push to object the savedEvents array
    if (savedEvents == null ) {
        savedEvents = [];
    }
    else if (savedEvents != null) (
        savedEvents = JSON.parse(localStorage.getItem("SavedEvents"))
    )
    task.eventTime = timeArea;
    task.eventDescription = textArea;
    task.eventDay = theDay;
         console.log(task);
    savedEvents.push(task);
        // console.log(savedEvents);
    var stringOfSaves = JSON.stringify(savedEvents);
        // console.log(stringOfSaves);
    localStorage.setItem("SavedEvents", stringOfSaves);
})
//Getting localStorage before saving
getEvents();
//TODO:// Get info from saved events
function getEvents () {
    savedEvents = JSON.parse(localStorage.getItem("SavedEvents"));
    if (savedEvents != null) {

   for( var j = 0; j < savedEvents.length; j++) {
    var getTime = savedEvents[j].eventTime;
    var getDescription = savedEvents[j].eventDescription;
    var getDay = savedEvents[j].eventDay;

    if (getDay = currentDay) {
        
        document.getElementById(getTime).textContent = getDescription;
    }
    else {

    }}}}
