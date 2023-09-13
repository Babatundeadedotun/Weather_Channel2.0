const displayWeather =  () => {

    if (userInput.value == "") {
        alert("Enter City Name");
    } else{
    let key = "4e708199bb1dd1a7a1f5c17cba376ef3";

    let cityName = userInput.value;

    let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`

   fetch(endPoint)
   .then(response => response.json())
   .then(result => {
    let city = `${result.name}`
    let temperature = `${result.main.temp}`
    let humidity = `${result.main.humidity}`
    let press = `${result.main.pressure}`
    let wind = `${result.wind.speed}`
    let cloud = `${result.clouds.all}`
    
    // let weather = `${result.weather.icon}`
    display.innerHTML = "";
    display.innerHTML += `
    <div class="shadow-5-strong mx-5 p-4 w-50 text-center inner-main justify-content-center">
    <img src="images/scr-removebg-preview.png" style="width:20%" class="cloud">
    <h1>${city}</h1>
    <h2>${Math.round(temperature)}℃<h2>
    <h5>Humidity: ${humidity}%</h5>
    <h5>Pressure: ${press} hPa</h5>
    <h5>Wind: ${wind}m/s</h5>
    <h5>Cloud: ${cloud}%</h5>
    </div>
   `
    // display.innerHTML += `${weather}`;
   })

   userInput.value = "";

}
}