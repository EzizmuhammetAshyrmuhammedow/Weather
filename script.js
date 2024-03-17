const apiKey = "468ca14c577da77de93431bfcc22f150";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather() {
  const city = document.querySelector(".search").value;
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404){
    document.querySelector(".weather").style.display = "none"
    document.querySelector(".error").style.display = "block"
}else{
  var data = await response.json();
    console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ " C";
  document.querySelector(".humid").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind_speed").innerHTML = data.wind.speed + " km/h";


  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "weather-app-img/images/clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "weather-app-img/images/clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "weather-app-img/images/rain.png";
  }
  else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "weather-app-img/images/mist.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "weather-app-img/images/drizzle.png";
  }
  document.querySelector(".weather").style.display = "block"
  document.querySelector(".error").style.display = "none"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather();
  document.querySelector(".search").value = null;
});
