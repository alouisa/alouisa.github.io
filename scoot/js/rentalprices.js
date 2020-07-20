const requestURL = `https://raw.githubusercontent.com/alouisa/alouisa.github.io/master/scoot/data/rentalprices.json`;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let tbody = document.querySelector('#rentalPricesTable tbody');
        jsObject.prices.forEach(element => {
            let rentaltype = ;
            let maxpersons = ;
            let halfdayRes = ;
            let fulldayRes = ;
            let halfdayNoRes = ;
            let fulldayNoRes = ;
        });
    });