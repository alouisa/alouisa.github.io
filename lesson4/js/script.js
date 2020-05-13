const monthsOfYear = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"];
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];
let date = new Date();
let m = date.getMonth();
let month = monthsOfYear[m]; 
let d = date.getDay();
let dayOfWeek = daysOfTheWeek[d]; 
let day = date.getDate();
let year = date.getFullYear();
let todaysDate = `${dayOfWeek}, ${day} ${month} ${year}`;
document.getElementById("todaysDate").innerHTML = todaysDate; 

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide"); 
}
