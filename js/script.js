function lastModified() {
        let date = new Date(document.lastModified);
        document.getElementById("todaysDate").innerHTML = `Last Updated: ${date.getMonth} / ${date.getDay} / ${date.getFullYear}${date.getHours}:${date.getUTCMinutes}:${date.getUTCMilliseconds}`;
    }