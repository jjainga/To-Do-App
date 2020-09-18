
//TODO: Set current date in top p tag

var today = moment().format('MMMM Do YYYY, H:mm:ss a');
console.log(today);
//Create Current day at top of page
$("#currentDay").text(today);

//TODO: Create grid and buttons to save
todayEvents();
function todayEvents() {
for (var i = 12; i > -12; i--) {
    //Creating elements for each variable and setting classes and attibutes
    var startingHour = moment().add(-i, 'hours').format('hA');

    var hour = $("<section>").addClass("row time-block");
    var time = $("<div>").addClass("col-md-1 hour");
    var userEvent = $("<textarea>").addClass("col-md-8 description");
    var save = $("<button>").addClass("col-md-1 saveBtn");
    var btn = $("<i>").attr( "i", "hover");
    //Appending each element to the page
    save.append(btn);
    hour.text(startingHour);
    hour.append(time);
    hour.append(userEvent);
    hour.append(save);
    $(".container").append(hour);
}}
//TODO: Save event to localstorage

console.log(moment().format('HH'))

