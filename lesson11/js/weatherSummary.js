const requestURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial";
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let highT = jsObject.main.temp_max;
        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        document.getElementById('weatherDescr').textContent = jsObject.weather[0].description;
        document.getElementById('current-temp').textContent = Math.floor(t);
        document.getElementById('highTemp').innerHTML = `${Math.floor(highT)}&deg;F`;
        document.getElementById('humidity').textContent = `Humidity: ${jsObject.main.humidity}%`;
        document.getElementById('windSpeed').textContent = Math.floor(s);
        if (t <= 50 && s >= 3.0) {
            document.querySelector("#windchill").innerHTML = Math.floor(windchill);
        }
        else {
            document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A";
        }
        
    });


const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const forecastfive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let i = 1;

    forecastfive.forEach(forecast => {
    const day = forecast.dt_txt;
    let d = new Date(day).getDay()
    const srcset = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
    document.querySelector(`#day${i}`).textContent = weekdays[d];
    document.querySelector(`#forecast${i}`).innerHTML = Math.floor(forecast.main.temp) +"&deg;F"; 
    document.querySelector(`#icon${i}`).setAttribute('src', srcset);
    document.querySelector(`#icon${i}`).setAttribute('alt', forecast.weather[0].description);
       i++; 
    });
    });