const requestURL = 'https:////byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = town.name;
            h3.innerHTML = ;
            p1.textContent = "Date of Birth: " + prophet.birthdate;
            p2.textContent = "Place of Birth: " + prophet.birthplace
            p3.textContent = "Place of Birth: " + prophet.birthplace;
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', town.name);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image)

            document.querySelector('div.cards').appendChild(card);

        });

    });