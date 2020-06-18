const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let image = document.createElement('img');
        let fullName = prophet.name + ' ' + prophet.lastname;

        h2.textContent = fullName;
        p1.textContent = "Date of Birth: " + prophet.birthdate;
        p2.textContent = "Place of Birth: " + prophet.birthplace;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', fullName + " - " + prophet.order);

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(image)

        document.querySelector('div.cards').appendChild(card); 
   
    });

});