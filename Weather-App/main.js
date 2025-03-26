const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const container = document.querySelector(".container");




runEventListener();
function runEventListener() {
  searchBtn.addEventListener("click",getWeatherInfo);
  searchBox.addEventListener("keypress", handlesearch)
}

function handlesearch(e) {
  if (e.key==="Enter") {
    getWeatherInfo();
  }
}

function getWeatherInfo() {
  const city = searchBox.value.trim();
  if (city) {
    checkWeather(city);
    searchBox.value = "";
  } else {
    const errorDiv = document.createElement("div");
    errorDiv.textContent = "Please enter a city name!!";
    errorDiv.style.color = "red";
    errorDiv.style.marginTop = "10px";
    errorDiv.style.fontSize = "16px";
    errorDiv.style.fontWeight = "600";

    container.appendChild(errorDiv);

    setTimeout(() => {
      errorDiv.remove();
    }, 3500);
  }
}

