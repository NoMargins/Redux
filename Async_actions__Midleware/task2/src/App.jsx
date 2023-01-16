import React from 'react';
import { Provider } from 'react-redux';
import store from './users/store.js';
import UserInfo from './users/UserInfo.jsx';
import SearchField from './users/SearchField';
import './index.scss';

const App = () => {
	return (
		<div className='page'>
			<Provider store={store}>
				<UserInfo />
				<SearchField />
			</Provider>
		</div>
	);
};

export default App;
