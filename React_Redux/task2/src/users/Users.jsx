import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';
import './users.scss';

class Users extends React.Component {
	handleCreateUser = () => {
		const id = Math.round(Math.random() * 1000000);
		const newUser = {
			id,
			name: `User # ${id}`,
		};
		this.props.addUser(newUser);
	};

	render() {
		const { usersList, deleteUser } = this.props;

		console.log(usersList);

		return (
			<div className='users'>
				<button className='users__create-btn' onClick={this.handleCreateUser}>
					Create user
				</button>
				<ul className='users__list'>
					{usersList.map((user) => {
						return (
							<li key={user.id} className='users__list-item'>
								<span>{user.name}</span>
								<button
									className='users__delete-btn'
									onClick={() => deleteUser(user.id)}
								>
									+
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		usersList: state.usersList,
	};
};

const mapDispatch = {
	addUser: usersActions.addUser,
	deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);
