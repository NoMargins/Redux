import React from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import filteredUsersSelector from './store/users.selectors.js';
import searchTextAction from './store/users.actions.js';

const UsersList = ({ usersList, enterText }) => {
	return (
		<div>
			<Filter findUser={enterText} usersList={usersList} />
			{usersList.map((user) => {
				return <User key={user.id} {...user} />;
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		usersList: filteredUsersSelector(state),
	};
};

const mapDispatch = {
	enterText: searchTextAction,
};

export default connect(mapStateToProps, mapDispatch)(UsersList);
