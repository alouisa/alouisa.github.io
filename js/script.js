        let date = new Date(document.lastModified);
        let month = date.getMonth();
        let day = date.getDay();
        let year = date.getFullYear();
        let time = date.getTime(); 
        let message = `Last Updated: ${month} / ${day} / ${year} ${time}`;
        document.getElementById("dateOutput").innerHTML = message;
