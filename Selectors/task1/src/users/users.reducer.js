import { GO_NEXT, GO_PREV } from './users.actions.js';
import users from './users.js';

function getCroppedArray(index) {
	const array_size = initialState.itemsPerPage;
	const sliced_array = [];
	for (let i = 0; i < users.length; i += array_size) {
		sliced_array.push(users.slice(i, i + array_size));
	}
	return sliced_array[index];
}

const initialState = {
	currentPage: 0,
	usersList: users.slice(0, 3),
	totalItems: users.length,
	itemsPerPage: 3,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GO_NEXT:
			const nextArray = getCroppedArray(state.currentPage + 1);
			return {
				...state,
				currentPage: state.currentPage + 1,
				usersList: nextArray,
			};
		case GO_PREV:
			const prevArray = getCroppedArray(state.currentPage - 1);
			return {
				...state,
				currentPage: state.currentPage - 1,
				usersList: prevArray,
			};
		default:
			return state;
	}
};

export default usersReducer;
