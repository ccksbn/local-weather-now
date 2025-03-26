const apiKey = "64fde806b62a79d358aaa560e1997d77";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/cloudy-1-day.svg";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear-day.svg";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rainy-1-day.svg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/hail.svg";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/dust.svg";
  }

  document.querySelector(".weather").style.display = "block";
  const copyrightDisplay=document.querySelector(".copyright").style.display="block"
}
