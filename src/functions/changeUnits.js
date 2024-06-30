import {processWeatherData, processForecastData} from './api'

function changeUnits() {
    const changeUnitsElement = document.querySelector('.changeUnits');
    const temperature = document.querySelector('.temperature');
    const feelsLike = document.querySelector('.feelsLike');
    const windSpeed = document.querySelector('.windSpeed');
    const high = document.querySelectorAll('.high');
    const low = document.querySelectorAll('.low');
    let tempF;
    let feelsF;
    let windMPH;
    let tempC;
    let feelsC;
    let windKPH
    let lowF;
    let highF;
    let lowC;
    let highC;

    if (changeUnitsElement.textContent === 'Toggle °F') {
        tempF = Math.round(((Number(temperature.textContent.slice(0, temperature.textContent.indexOf(' '))) * 9/5) + 32) * 10) / 10;
        temperature.textContent = String(tempF) + ' °F';
        feelsF = Math.round(((Number(feelsLike.textContent.slice(0, feelsLike.textContent.indexOf(' '))) * 9/5) + 32) * 10) / 10;
        feelsLike.textContent = String(feelsF) + ' °F';
        windMPH = Math.round(Number(windSpeed.textContent.slice(0, windSpeed.textContent.indexOf(' '))) / 1.609 * 10) / 10;;
        windSpeed.textContent = String(windMPH) + ' mph';

        for (let i=0; i<high.length; i++) {
            highF = Math.round(((Number(high[i].textContent.slice(0, high[i].textContent.indexOf(' '))) * 9/5) + 32) * 10) / 10;
            high[i].textContent = String(highF) + ' °F';
            lowF = Math.round(((Number(low[i].textContent.slice(0, low[i].textContent.indexOf(' '))) * 9/5) + 32) * 10) / 10;
            low[i].textContent = String(lowF) + ' °F';
        }
        changeUnitsElement.textContent = 'Toggle °C';
    }
    else {
        tempC = Math.round(((Number(temperature.textContent.slice(0, temperature.textContent.indexOf(' '))) - 32) * 5/9) * 10) / 10;
        temperature.textContent = String(tempC) + ' °C';
        feelsC = Math.round(((Number(feelsLike.textContent.slice(0, feelsLike.textContent.indexOf(' '))) - 32) * 5/9) * 10) / 10;
        feelsLike.textContent = String(feelsC) + ' °C';
        windKPH = Math.round(Number(windSpeed.textContent.slice(0, windSpeed.textContent.indexOf(' '))) * 1.609 * 10) / 10;
        windSpeed.textContent = windKPH + ' km/h';

        for (let i=0; i<high.length; i++) {
            highC = Math.round(((Number(high[i].textContent.slice(0, high[i].textContent.indexOf(' '))) - 32) * 5/9) * 10) /10;
            high[i].textContent = String(highC) + ' °C';
            lowC = Math.round(((Number(low[i].textContent.slice(0, low[i].textContent.indexOf(' ')) -32) * 5/9)) * 10) / 10
            low[i].textContent = String(lowC) + ' °C';
        }

        changeUnitsElement.textContent = 'Toggle °F';
    }
}

export default changeUnits;