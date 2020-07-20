const requestURL = `https://raw.githubusercontent.com/alouisa/alouisa.github.io/master/scoot/data/rentalprices.json`;
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
       let rentalData  = jsObject.rentalData;
       console.log(rentalData);
    });