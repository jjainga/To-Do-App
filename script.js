
//TODO: Set current date in top p tag

var today = moment().format('MMMM Do YYYY, h:mm a');
console.log(today);
//Create Current day at top of page
$("#currentDay").text(today);
var currentTime = Number(moment().format('H'));
console.log(currentTime);
//TODO:// Create an Array to Save Events
var savedEvents = [];
var task = {
    eventTime: " ",
    eventDescription: " "
    }

//TODO: Create grid and buttons to save
todayEvents();
function todayEvents() {
for (var i = 9; i < 19; i++) {
    //Creating elements for each variable and setting classes and attibutes
    if (i >= 12) {
        var ampm = "PM";
    }
    else if (i < 12) {
        var ampm = "AM";
    }
    var startingHour = i + ampm;

    console.log(i);
    console.log(startingHour);
    //Create Row for each event
    var hour = $("<section>").addClass("row time-block");
    //Create Hour col
    var time = $("<div>").addClass("col-md-1 hour font-weight-bold").attr("id", "time" + i);
    //Create descrition text area
    var userEvent = $("<textarea>").addClass("col-md-8 description").attr("id", "description" + i);
    //Create button
    var save = $("<button>").addClass("col-md-1 saveBtn").attr("id", "save" + i);
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
        console.log(textArea);
        console.log(timeArea);
    //push to object
    task.eventTime = timeArea;
    task.eventDescription = textArea;
        console.log(task);
    savedEvents.push(task);
        console.log(savedEvents);
    var stringOfSaves = JSON.stringify(savedEvents);
        console.log(stringOfSaves);
    localStorage.setItem("Saved Events", stringOfSaves);
})