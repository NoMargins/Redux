import React from 'react';
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

export default User;
