import { ADD_USER, REMOVE_USER, UPDATE_USER } from './users.actions.js';

const initialState = {
	usersList: [],
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				usersList: state.usersList.concat(action.payload.userData),
			};
		case REMOVE_USER:
			const newUserList = state.usersList.filter(
				({ id }) => id != action.payload.userId
			);
			return {
				...state,
				usersList: newUserList,
			};
		case UPDATE_USER:
			const newList = state.usersList.map((user) => {
				if (user.id === action.payload.userId) {
					return {
						...user,
						...action.payload.newUserData,
					};
				}

				return user;
			});
			return {
				...state,
				usersList: newList,
			};
		default:
			return state;
	}
};

export default usersReducer;
