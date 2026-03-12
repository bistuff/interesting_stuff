function updateClocks(){

let now = new Date();

document.getElementById("athens").textContent =
now.toLocaleTimeString("en-GB",{timeZone:"Europe/Athens"});

document.getElementById("sydney").textContent =
now.toLocaleTimeString("en-GB",{timeZone:"Australia/Sydney"});

document.getElementById("jakarta").textContent =
now.toLocaleTimeString("en-GB",{timeZone:"Asia/Jakarta"});

document.getElementById("newyork").textContent =
now.toLocaleTimeString("en-GB",{timeZone:"America/New_York"});

document.getElementById("paris").textContent =
now.toLocaleTimeString("en-GB",{timeZone:"Europe/Paris"});


document.getElementById("california").textContent = now.toLocaleTimeString("en-GB",{timeZone:"America/Los_Angeles"});

}

setInterval(updateClocks,1000);
updateClocks();