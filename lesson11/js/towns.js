const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'].filter(town => town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs");
        // console.log(towns); //delete after use
        const activeTown = document.querySelector('li.active a').textContent;
        towns.forEach(town => {
            //Homepage town cards
            if (activeTown == "Home") {
                    let card = document.createElement('section')
                    let div = document.createElement('div')
                    let h3 = document.createElement('h3');
                    let p1 = document.createElement('p');
                    let p2 = document.createElement('p');
                    let p3 = document.createElement('p');
                    let p4 = document.createElement('p');
                    let image = document.createElement('img');

                    div.setAttribute('class', 'townData')
                    h3.textContent = town.name;
                    h3.setAttribute('class', 'townName');
                    p1.textContent = town.motto;
                    p1.setAttribute('class', 'townMoto');
                    p2.textContent = "Year Founded: " + town.yearFounded;
                    p3.textContent = "Population: " + town.currentPopulation;
                    p4.textContent = "Annual Rain Fall: " + town.averageRainfall;
                    image.setAttribute('src', `images/home/${town.photo}`);
                    image.setAttribute('alt', town.name);

                    div.appendChild(h3);
                    div.appendChild(p1);
                    div.appendChild(p2);
                    div.appendChild(p3);
                    div.appendChild(p4);
                    card.appendChild(div);
                    card.appendChild(image);

                    document.querySelector('div.cards').appendChild(card);
                }
            else {
            //Town Weather Summary
                const requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${activeTown}&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial`;
                fetch(requestURL)
                    .then((response) => response.json())
                    .then((jsObject) => {
                        let highT = jsObject.main.temp_max;
                        let t = jsObject.main.temp;
                        let s = jsObject.wind.speed;
                        let windchill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
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

                //Weekly Forecast
                const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${activeTown}&APPID=afbcf6ac456ba0edf76d17cd9722668b&units=imperial`;
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
                            document.querySelector(`#forecast${i}`).innerHTML = Math.round(forecast.main.temp) + "&deg;F";
                            document.querySelector(`#icon${i}`).setAttribute('src', srcset);
                            document.querySelector(`#icon${i}`).setAttribute('alt', forecast.weather[0].description);
                            i++;
                        });
                    });

                //Town Events
                if(town.name == activeTown){
                let eventHeader = document.createElement('h3');
                    eventHeader.style.color = "rgb(221, 91, 4)";
                let events = town.events;
                let eventList = document.createElement('ul');
                eventList.style.fontSize = "1.15rem";
                eventList.style.listStyle = "square";   
                let eventsDiv = document.querySelector("#upcomingEvents");
                events.forEach(event => {
                    let li =document.createElement('li');
                    li.textContent = event;
                    eventList.appendChild(li);
                }); 
                eventHeader.textContent= `${town.name} Upcomming events`;
                eventsDiv.appendChild(eventHeader);
                eventsDiv.appendChild(eventList);
                }

            }
        });

    });