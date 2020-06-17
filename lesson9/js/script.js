const monthsOfYear = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];
const announcement = document.querySelector(".announcement");
let date = new Date();
let m = date.getMonth(); 
let d = date.getDay();
let day = date.getDate();
let year = date.getFullYear();
let todaysDate = `${daysOfTheWeek[d]}, ${day} ${monthsOfYear[m]} ${year}`;
document.getElementById("todaysDate").innerHTML = todaysDate;
document.querySelector(".copyright span").innerHTML = year;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide"); 
}

