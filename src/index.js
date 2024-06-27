import * as css from './index.css';
import {getCurrentWeather, getForecast, processWeatherData, processForecastData} from './functions/api';

getCurrentWeather('Vancouver');
getForecast('Vancouver');