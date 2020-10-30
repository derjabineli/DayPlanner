var inputItem = document.getElementById("item")
const btn = document.getElementById("button")

var today = moment().format('MMMM Do YYYY');
$("#currentDay").text(today);
console.log(moment())
console.log(today)

var currentHour = moment().format('h a')
console.log(currentHour)

// Creates schedule
function makeSchedule() {
    setHours();
    setStatus();
}

// Sets the current hour of when user is using the app
function setHours() {
    var currentHour = moment().format('h a')
}

// Sets the status of the hour divs
function setStatus(element, correct) {
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

// Saves entry
function save() {

}

// Enter new entry
// function newEntry() {
//     inputItem.addEventListener('click'){

//     }
// }