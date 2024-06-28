async function getCurrentWeather(location) {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=42b61dadb6a94661aa3193323241606&q=' + location, {mode: 'cors'})
    const currentWeather = await response.json();
    return currentWeather;
}

async function getForecast(location) {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=42b61dadb6a94661aa3193323241606&days=3&q=' + location, {mode: 'cors'})
    const forecastJson = await response.json();
    return await forecastJson.forecast;
}

function processWeatherData(data) {
    const weatherData = {
        condition: data.current.condition.text,
        condition_icon: 'https:' + data.current.condition.icon,
        feelslike_c: data.current.feelslike_c + ' °C',
        feelslike_f: data.current.feelslike_f + ' °F',
        temp_c: data.current.temp_c + ' °C',
        temp_f: data.current.temp_f + ' °F',
        wind_kph: data.current.wind_kph + ' km/h',
        wind_mph: data.current.wind_mph + ' mph',
        humidity: data.current.humidity + ' %',
        location: data.location.name,
    }
    return weatherData;
}

function processForecastData(data) {
    const forecastNum = (new Date(data.date)).getDay() + 1
    const forecastData = {
        maxtemp_c: data.day.maxtemp_c + ' °C',
        maxtemp_f: data.day.maxtemp_f + ' °F',
        mintemp_c: data.day.mintemp_c + ' °C',
        mintemp_f: data.day.mintemp_f + ' °F',
        daily_chance_of_rain: data.day.daily_chance_of_rain + ' %',
        day: (forecastNum !== 7) ? forecastNum : 0,
        icon: 'https:' + data.day.condition.icon,
    }
    return forecastData;
}

export {getCurrentWeather, getForecast, processWeatherData, processForecastData};