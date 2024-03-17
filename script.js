const apiKey = "468ca14c577da77de93431bfcc22f150"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBtn = document.getElementById("searchBtn")


async function checkWeather(){
    const city = document.querySelector(".search").value
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = data.main.temp + " C"
    document.querySelector(".humid").innerHTML = data.main.humidity + " %"
    document.querySelector(".wind_speed").innerHTML = data.wind.speed + " km/h"
}
searchBtn.addEventListener("click", ()=>{
    checkWeather()
    document.querySelector(".search").value = null
})