import React from 'react';

const Filter = ({ usersList, findUser }) => {
	return (
		<div className='filter'>
			<span className='filter__count'>{usersList.length}</span>
			<input
				type='text'
				className='filter__input'
				onChange={(e) => findUser(e.target.value)}
			/>
		</div>
	);
};

export default Filter;
