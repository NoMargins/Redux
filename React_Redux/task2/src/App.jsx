import React from 'react';
import Users from './users/Users.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.scss';

const App = () => {
	return (
		<Provider store={store}>
			<Users />
		</Provider>
	);
};

export default App;
