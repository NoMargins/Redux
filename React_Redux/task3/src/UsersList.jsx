import React from 'react';
import User from './users/User.jsx';
import Pagination from './pagination/Pagination.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.scss';

class UsersList extends React.Component {
	render() {
		return (
			<>
				<Provider store={store}>
					<Pagination />
					<User />
				</Provider>
			</>
		);
	}
}

export default UsersList;
