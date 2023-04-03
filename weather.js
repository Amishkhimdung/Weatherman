var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;

const apiKey = "6a675a69d5cb56ad2994d1356bb0dbe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const form = document.getElementById("form");

form.addEventListener("click", async function (e) {
    e.preventDefault();
    const searchfield = document.getElementById("search-bar").value;
    const response = await fetch(apiUrl + searchfield + `&appid=${apiKey}`);
    const data = await response.json();
    const cname = document.getElementById("cname");
    cname.innerHTML = data.name;
    const temp = document.getElementById("temp");
    temp.innerHTML = Math.round(data.main.temp)+"°C";
    const text = document.getElementById("condition");
    text.innerHTML = data.weather[0].description;
    console.log(data.weather[0].description);
    const windspeed = document.getElementById("wind");
    windspeed.innerHTML = data.wind.speed;
    const humid = document.getElementById("humid");
    humid.innerHTML = data.main.humidity;
    const pressure = document.getElementById("press");
    pressure.innerHTML = data.main.pressure;

});
