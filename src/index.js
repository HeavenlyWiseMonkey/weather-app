import * as css from './index.css';
import {changeTodayWeatherText, showForecast} from './functions/display';
import changeUnits from './functions/changeUnits'

const input = document.querySelector('input');
const search = document.querySelector('.search');
const changeUnitsElement = document.querySelector('.changeUnits');

changeTodayWeatherText('Vancouver');
showForecast('Vancouver');

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value) {
        changeTodayWeatherText(input.value);
        showForecast(input.value);
        input.value = '';
    }
});

search.addEventListener('click', () => {
    if (input.value) {
        changeTodayWeatherText(input.value);
        showForecast(input.value);
        input.value = '';
    }
});

changeUnitsElement.addEventListener('click', () => {
    changeUnits();
});

