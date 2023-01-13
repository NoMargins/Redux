import React from 'react';
import { connect } from 'react-redux';
import './users.scss';

const User = ({ usersList }) => {
	return (
		<ul className='users'>
			{usersList.map((user) => (
				<li className='user' key={user.id}>
					<span className='user__name'>{user.name}</span>
					<span className='user__age'>{user.age}</span>
				</li>
			))}
		</ul>
	);
};

const mapState = (state) => {
	return {
		usersList: state.usersList,
	};
};

export default connect(mapState)(User);
