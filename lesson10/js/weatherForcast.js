const requestURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=afbcf6ac456ba0edf76d17cd9722668b";
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    })


let t = parseFloat(document.querySelector("#highTemp").innerHTML);
let s = parseFloat(document.querySelector("#windSpeed").innerHTML);
let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275* t * Math.pow(s, 0.16);
if(t <= 50 && s >= 3.0){
    document.querySelector("#windchill").innerHTML = Math.round(windchill);
}
else{
    document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A"; 
}



