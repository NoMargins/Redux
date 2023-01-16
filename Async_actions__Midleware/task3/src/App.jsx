import React from 'react';
import { Provider } from 'react-redux';
import store from './weather/store.js';
import Weather from './weather/Weather.jsx';
import './index.scss';

const App = () => {
	return (
		<div className='page'>
			<Provider store={store}>
				<Weather />
			</Provider>
		</div>
	);
};

export default App;
