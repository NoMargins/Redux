import React from 'react';
import { Provider } from 'react-redux';
import TransferList from './TransferList';
import store from './options/store.js';
import './index.scss';

const App = () => {
	return (
		<Provider store={store}>
			<TransferList />
		</Provider>
	);
};

export default App;
