const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial";
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
        const desc = jsObject.weather[0].description; 
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); 
        document.getElementById('icon').setAttribute('alt', desc);
});

