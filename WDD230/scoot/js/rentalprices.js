const requestURL = `https://raw.githubusercontent.com/alouisa/alouisa.github.io/master/scoot/data/rentalprices.json`;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let rentalData = jsObject['rentalData'];
        let tbody = document.querySelector('#rentalPricesTable tbody');
        rentalData.forEach(rental => {
            const newRow = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');

            td1.textContent = rental.rentalType;
            td2.textContent = rental.maxPersons;
            td3.textContent = `$ ${rental.halfDayRes}`;
            td4.textContent = `$ ${rental.fullDayRes}`;
            td5.textContent = `$ ${rental.halfDayWalkIn}`;
            td6.textContent = `$ ${rental.fullDayWalkIn}`;

            newRow.appendChild(td1);
            newRow.appendChild(td2);
            newRow.appendChild(td3);
            newRow.appendChild(td4);
            newRow.appendChild(td5);
            newRow.appendChild(td6)
                              
            tbody.appendChild(newRow);
           ;
        });
    });