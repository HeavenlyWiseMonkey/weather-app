import {getCurrentWeather, getForecast, processWeatherData, processForecastData} from './api';

async function changeTodayWeatherText(inputData) {
    const currentWeather = await getCurrentWeather(inputData);
    const weatherData = processWeatherData(currentWeather);

    const condition = document.querySelector('.condition');
    const conditionIcon = document.querySelector('.conditionIcon');
    const location = document.querySelector('.location');
    const temperature = document.querySelector('.temperature');
    const feelsLike = document.querySelector('.feelsLike');
    const humidity = document.querySelector('.humidity');
    const windSpeed = document.querySelector('.windSpeed');

    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
    temperature.textContent = weatherData.temp_c;

    feelsLike.textContent = weatherData.feelslike_c;
    humidity.textContent = weatherData.humidity;
    windSpeed.textContent = weatherData.wind_kph;

    conditionIcon.src = weatherData.condition_icon;
    // Add event listener in function
}

async function showForecast(inputData) {
    const forecast = await getForecast(inputData);
    const forecastData = processForecastData(forecast.forecastday[0]);

    const chanceOfRain = document.querySelector('.chanceOfRain');
    const forecastDay = document.querySelectorAll('.forecastDay');
    const high = document.querySelectorAll('.high');
    const low = document.querySelectorAll('.low');
    const icon = document.querySelectorAll('.icon');

    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    chanceOfRain.textContent = forecastData.daily_chance_of_rain;

    for (let i=0; i<forecastDay.length; i++) {
        const nextForecastData = processForecastData(forecast.forecastday[i+1]);
        high[i].textContent = nextForecastData.maxtemp_c;
        low[i].textContent = nextForecastData.mintemp_c;
        forecastDay[i].textContent = weekDay[nextForecastData.day];
        icon[i].src = nextForecastData.icon;
    }
}

export {changeTodayWeatherText, showForecast};