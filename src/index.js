import * as css from './index.css';
import { changeTodayWeatherText, showForecast} from './functions/display';

const input = document.querySelector('input');
const search = document.querySelector('.search');

changeTodayWeatherText('Vancouver');
showForecast('Vancouver');

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        changeTodayWeatherText(input.value);
        showForecast(input.value);
        input.value = '';
    }
});

search.addEventListener('click', () => {
    changeTodayWeatherText(input.value);
    showForecast(input.value);
    input.value = '';
});
