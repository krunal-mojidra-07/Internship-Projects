const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loader = document.getElementById("loader");
const content = document.getElementById("weatherContent");

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const icon = document.getElementById("icon");

/* 🔑 PUT YOUR API KEY HERE */
const API_KEY = "389e96bfcc96fde119220ff69bec7657";

/* ===== THEME ===== */
function setWeatherTheme(condition, isNight){
  document.body.className = "";

  if(condition.includes("rain")){
    document.body.classList.add("rain");
    icon.innerText = "🌧️";
  }
  else if(condition.includes("cloud")){
    document.body.classList.add("clouds");
    icon.innerText = "☁️";
  }
  else if(isNight){
    document.body.classList.add("night");
    icon.innerText = "🌙";
  }
  else{
    document.body.classList.add("clear");
    icon.innerText = "☀️";
  }
}

/* ===== REAL API ===== */
async function getWeather(city){
  loader.style.display = "block";
  content.style.display = "none";

  try{
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if(!res.ok) throw new Error("City not found");

    const data = await res.json();

    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const wind = Math.round(data.wind.speed);
    const condition = data.weather[0].description.toLowerCase();

    const sunrise = data.sys.sunrise * 1000;
    const sunset = data.sys.sunset * 1000;
    const now = Date.now();
    const isNight = now < sunrise || now > sunset;

    cityEl.innerText = `${data.name}, ${data.sys.country}`;
    tempEl.innerText = `${temp}°C`;
    conditionEl.innerText = data.weather[0].main;
    humidityEl.innerText = `${humidity}%`;
    windEl.innerText = `${wind} km/h`;

    setWeatherTheme(condition, isNight);

  }catch(err){
    alert("City not found ❌");
  }

  loader.style.display = "none";
  content.style.display = "block";
}

/* EVENTS */
searchBtn.addEventListener("click",()=>{
  const city = cityInput.value.trim();
  if(city) getWeather(city);
});

cityInput.addEventListener("keypress",e=>{
  if(e.key === "Enter") searchBtn.click();
});

/* DEFAULT LOAD */
getWeather("Ahmedabad");
