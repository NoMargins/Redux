import React from 'react';
import UsersList from './UsersList';
import store from './store';
import { Provider } from 'react-redux';

import './index.scss';

const App = () => {
	return (
		<Provider store={store}>
			<UsersList />
		</Provider>
	);
};

export default App;
