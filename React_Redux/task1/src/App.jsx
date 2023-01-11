import React from 'react';
import Counter from './Counter.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.scss';

const App = () => {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
};

export default App;
