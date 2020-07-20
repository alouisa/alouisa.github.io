const requestURL = `https://raw.githubusercontent.com/alouisa/alouisa.github.io/master/scoot/data/rentalprices.json`;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let rentalData = jsObject['rentalData'];
        let tbody = document.querySelector('#rentalPricesTable tbody');
        rentalData.forEach(element => {
            const newRow = document.createElement('tr');
            const rentaltype = document.createElement('td');
            const maxpersons = document.createElement('td');
            const halfdayRes = document.createElement('td');
            const fulldayRes = document.createElement('td');
            const halfdayNoRes = document.createElement('td');
            const fulldayNoRes = document.createElement('td');

            newRow.appendChild(rentaltype);
            newRow.appendChild(maxpersons);
            newRow.appendChild(rentaltype);
            newRow.appendChild(halfdayRes);
            newRow.appendChild(fulldayRes);
            newRow.appendChild(halfdayNoRes)
            newRow.appendChild(fulldayNoRes)
                              
            tbody.appendChild(newRow);
           ;
        });
    });