import React from 'react';
import Spinner from './Spinner';
import { isFetchingSelector, userDataSelector } from './user.selectors.js';
import * as userActions from './user.actions';
import { connect } from 'react-redux';

const UserInfo = ({ userData, isFetching }) => {
	if (isFetching) {
		return <Spinner />;
	}

	if (!userData) {
		return null;
	}

	return (
		<div className='user'>
			<img
				alt='User Avatar'
				src={userData.avatar_url}
				className='user__avatar'
			/>
			<div className='user__info'>
				<span className='user__name'>{userData.name}</span>
				<span className='user__location'>{userData.location}</span>
			</div>
		</div>
	);
};

const mapState = (state) => {
	return {
		userData: userDataSelector(state),
		isFetching: isFetchingSelector(state),
	};
};

export default connect(mapState)(UserInfo);
