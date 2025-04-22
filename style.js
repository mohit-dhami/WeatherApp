let apiKey = "3d640a6827321f2b4745139667c1c3b8";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    } else {
        let data = await response.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';



        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/images/rain.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/images/mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/images/snow.png"
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/images/drizzle.png"
        }

        document.querySelector(".weather").style.display = "block"
         document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        checkWeather(searchBox.value)
    }
});








