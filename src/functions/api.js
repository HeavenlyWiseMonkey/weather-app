function getCurrentWeather(location) {
    fetch('https://api.weatherapi.com/v1/current.json?key=42b61dadb6a94661aa3193323241606&q=' + location, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
    });
}

function getForecast(location) {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=42b61dadb6a94661aa3193323241606&days=3&q=' + location, {mode: 'cors'})
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        return response.forecast;
    })
    .then((response) => {
        console.log(response);
    });
}

function processWeatherData(data) {
    const weatherData = {
        condition: data.current.condition.text,
        feelslike_c: data.current.feelslike_c,
        feelslike_f: data.current.feelslike_f,
        temp_c: data.current.temp_c,
        temp_f: data.current.temp_f,
        locationtime: data.locationtime,
        locationtime_epoch: data.locationtime_epoch,
        wind_kph: data.wind_kph,
        wind_mph: data.wind_mph,
        humidity: data.humidity,
    }
    return weatherData;
}

function processForecastData(data) {
    const forecastData = {
        maxtemp_c: data.day.maxtemp_c,
        maxtemp_f: data.day.maxtemp_f,
        mintemp_c: data.day.mintemp_c,
        mintemp_c: data.day.mintemp_f,
        daily_chance_of_rain: data.day.daily_chance_of_rain,
    }
    return forecastData;
}

export {getCurrentWeather, getForecast, processWeatherData, processForecastData};