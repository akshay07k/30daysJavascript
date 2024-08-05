let API_KEY = "your_api_key";

const form = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let city  = e.target.cty.value;
    
    getWeatherDetails(city);
    get5dayForecastDetails(city);
})

function displayWeather(data) {
    const icon = data.weather[0].icon;
    const city = data.name;
    const temperature = data.main.temp;
    const condition = data.weather[0].description;
  
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather">`
    document.querySelector('.city').textContent = city;
    document.querySelector('.temp').textContent = `${temperature} °C`;
    document.querySelector('.cond').textContent = condition;
}

async function getWeatherDetails(city){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if(!res.ok){
            throw new Error("Error in fetching data")
        }
        let data = await res.json();
        console.log(data);
        
        displayWeather(data);

    } catch (error) {
        console.log("There has been a problem with fetch operation:", error);
        
    }
    
}

function display5dayForecast(data) {
    const forecastContainer = document.querySelector('.forecast');
    forecastContainer.innerHTML = ''; // Clear previous forecast

    const forecastByDay = {};

    data.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        
        if (!forecastByDay[day]) {
            forecastByDay[day] = {
                temps: [],
                conditions: []
            };
        }

        forecastByDay[day].temps.push(item.main.temp);
        forecastByDay[day].conditions.push(item.weather[0].description);
    });
    console.log(forecastByDay);
    
    for (const day in forecastByDay) {
        const dayData = forecastByDay[day];
        const avgTemp = (dayData.temps.reduce((a, b) => a + b, 0) / dayData.temps.length).toFixed(2);
        const mostCommonCondition = dayData.conditions.sort((a,b) =>
            dayData.conditions.filter(v => v===a).length
            - dayData.conditions.filter(v => v===b).length
        ).pop();

        const dayContainer = document.createElement('div');
        dayContainer.className = 'forecast-day';
        
        const dayTitle = document.createElement('h2');
        dayTitle.textContent = day;
        dayContainer.appendChild(dayTitle);

        const forecastDiv = document.createElement('div');
        forecastDiv.innerHTML = `${avgTemp} °C, ${mostCommonCondition}`;
        dayContainer.appendChild(forecastDiv);

        forecastContainer.appendChild(dayContainer);
    }
}

async function get5dayForecastDetails(city){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

        if(!res.ok){
            throw new Error("Error in fetching data")
        }
        let data = await res.json();
        console.log(data);
        
        display5dayForecast(data);

    } catch (error) {
        console.log("There has been a problem with fetch operation:", error);
        
    }
    
}