import { createSelector } from 'reselect';

const allUsersSelector = (state) => {
	return state.users.usersList;
};

const filterTextSelector = (state) => {
	return state.users.filterText;
};

const filteredUsersSelector = createSelector(
	[allUsersSelector, filterTextSelector],
	(allUsersArray, filterText) => {
		return filterText === ''
			? allUsersArray
			: allUsersArray.filter((user) =>
					user.name.toLowerCase().includes(filterText)
			  );
	}
);

export default filteredUsersSelector;
