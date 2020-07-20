var mydata = JSON.parse(data);
console.log(mydata);

const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial`;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        let highT = jsObject.main.temp_max;
        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('weatherDescr').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = Math.round(t);
        document.getElementById('highTemp').innerHTML = `${Math.round(highT)}&deg;F`;
        document.getElementById('windSpeed').textContent = Math.round(s);
        if (t <= 50 && s >= 3.0) {
            document.querySelector("#windchill").innerHTML = Math.round(windchill);
        }
        else {
            document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A";
        }

    });



https://github.com/alouisa/alouisa.github.io/blob/master/scoot/data/rentalprices.json