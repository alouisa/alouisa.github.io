const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial";
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let t = jsObject.main.temp;
        let s = jsObject.wind.speed;
        let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        // const forecastfive = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        // let i = 0;

        document.getElementById('current-temp').textContent = Math.round(t);
        if (t <= 50 && s >= 3.0) {
            document.querySelector("#windchill").innerHTML = Math.round(windchill);
        }
        else {
            document.querySelector("#windchill-container").innerHTML = "Wind Chill: N/A";
        }

        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; 
        const desc = jsObject.weather[0].description;  
        document.getElementById('icon').setAttribute('src', imagesrc);  
        document.getElementById('icon').setAttribute('alt', desc);

        // forecastfive.forEach(forecast => {
            
        // });
        
    });



