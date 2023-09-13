const goTo = () => {
    window.location.href = "main/index.html";
}

const successCallback = (position) => {

    let key = "4e708199bb1dd1a7a1f5c17cba376ef3";

    let long = position.coords.longitude;
    
    let lat = position.coords.latitude;

    let endPoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`

    // console.log(endPoint);
    fetch(endPoint)
    .then(response => response.json())
    .then(result => {
        let city = `${result.name}`
        let cond = `${result.weather[0].description}`
        let country = `${result.sys.country}`
        let temperature = `${result.main.temp}`
        let wind = `${result.wind.speed}`
        let longi = `${result.coord.lon.toFixed(2)}`
        let lat = `${result.coord.lat.toFixed(2)}`

        disp.innerHTML = "";

        disp.innerHTML += `
        <div class="ps-5 ms-5">
        <h5 class="info-head">Your Location:</h5>
        <p class="info">${longi}&deg;N, ${lat}&deg;E</p>
        <p class="info">${city} ${country}, Temperature: ${temperature}&deg;C, Description: ${cond}, Speed: ${wind}m/s</p>
        <div>
        `

    })
}

const errorCallback = (error) => {
    console.log(error);
}

const locatePosition = () => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}



