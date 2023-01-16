import { fetchWeatherData } from './gateway.js';

export const WEATHER_DATA = 'WEATHER/WEATHER_DATA';

export const weatherDataFetching = (fetchedData) => {
	return {
		type: WEATHER_DATA,
		payload: {
			fetchedData,
		},
	};
};

export const getWeatherData = () => {
	return function (dispatch) {
		fetchWeatherData().then((userData) => {
			dispatch(weatherDataFetching(userData));
		});
	};
};
