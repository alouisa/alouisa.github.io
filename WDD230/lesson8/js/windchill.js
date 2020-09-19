let t = parseFloat(document.querySelector("#highTemp").innerHTML);
let s = parseFloat(document.querySelector("#windSpeed").innerHTML);
let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275* t * Math.pow(s, 0.16);
if(t <= 50 && s >= 3.0){
    document.querySelector("#windchill").innerHTML = Math.round(windchill);
}
else{
    document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A"; 
}



