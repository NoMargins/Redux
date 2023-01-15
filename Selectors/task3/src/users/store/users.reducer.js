import { CHOOSE_USERS } from './users.actions.js';
import users from './users.js';

const initialState = {
	usersList: users,
	filterText: '',
	filteredUsers: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHOOSE_USERS:
			const { filterText } = action.payload;
			return {
				...state,
				filterText: filterText,
			};

		default:
			return state;
	}
};

export default usersReducer;
