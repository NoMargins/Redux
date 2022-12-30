import { initialState } from './store.js';
import { ADDUSER, REMOVEUSER } from './users.actions.js';

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDUSER:
			return {
				...state,
				usersList: state.usersList.concat(action.newUser),
			};
		case REMOVEUSER:
			return {
				...state,
				usersList: state.usersList.filter(({ id }) => id != action.id),
			};
		default:
			return state;
	}
};
