let tempF = document.querySelector("#highTemp").value;
let windSpeed = document.querySelector("#windSpeed").value;
let t = parseFloat(tempF);
let s = parseFloat(windSpeed);
let windchill = (35,74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275* t * Math.pow(s, 0.16)));
document.querySelector("#windchill").innerHTML = windchill;