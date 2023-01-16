import React from 'react';
import { connect } from 'react-redux';
import { weatherDataSelector } from './weather.selectors.js';
import { getWeatherData } from './weather.actions';

const Weather = ({ weatherData, downloadWeatherData }) => {
	downloadWeatherData();
	return (
		<main className='weather'>
			<h1 className='weather__title'>Weather data</h1>
			{weatherData && (
				<ul className='cities-list'>
					{weatherData.map((cityData) => {
						return (
							<li className='city' key={cityData.id}>
								<span className='city__name'>{cityData.name}</span>
								<span className='city__temperature'>
									{cityData.temperature} F
								</span>
							</li>
						);
					})}
				</ul>
			)}
		</main>
	);
};

const mapState = (state) => {
	return {
		weatherData: weatherDataSelector(state),
	};
};

const mapDispatch = {
	downloadWeatherData: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
