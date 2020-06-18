const requestURL = 'https:////byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs"){
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = town.name;
                p1.textContent = town.motto;
                p2.textContent = "Year Founded: " + town.yearFounded;
                p3.textContent = "Population: " + town.currentPopulation;
                p4.textContent = "Annual Rain Fall: " + town.averageRainfall;
                image.setAttribute('src', `images/home/${town.photo}`);
                image.setAttribute('alt', town.name);

                card.appendChild(h2);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                card.appendChild(image)

                document.querySelector('div.cards').appendChild(card);
            }
        });

    });