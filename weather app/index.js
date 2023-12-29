let weather = document.querySelector("#weather")
let city = document.getElementById("city")
let windFlow = document.getElementById("windFlow")
let seaLevel = document.getElementById("seaLevel")
let humidity = document.getElementById("humidity")
let highest = document.getElementById("highest")
let lowest = document.getElementById("lowest")
let submitBtn = document.getElementById("submit")
let descripton = document.getElementById("descripton")
let newDate = document.getElementById("date")
let tempLevel = document.querySelector(".tempLevel")
let displayText = document.getElementById("displayText")

const symbol = '\u00B0C';
const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.toLocaleString('default', { month: 'short' });
const currentYear = currentDate.getFullYear();


function getWeather() {

    let inputField = document.getElementById("textInput").value.trim()
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=c30da74eb17bd6e5a65d1d7f7fb8c2e6&units=metric`
    fetch(url)
    .then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        weather.textContent = data.main.temp + symbol
        windFlow.textContent = data.wind.speed
        seaLevel.textContent = data.main.pressure
        humidity.textContent = data.main.humidity
        highest.textContent = data.main.temp_max + symbol
        lowest.textContent = data.main.temp_min + symbol
        descripton.textContent = data.weather[0].description
        city.textContent = inputField.toUpperCase() + ", " + data.sys.country.toUpperCase()
        newDate.textContent = currentDay + " " + currentMonth + "," + currentYear
        displayText.style.display="none"
        tempLevel.style.display="flex"
        image.innerHTML = data.weather[0].icon
    })
}
getWeather()

submitBtn.addEventListener('click', getWeather)
