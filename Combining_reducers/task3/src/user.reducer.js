import { SET_USER, REMOVE_USER } from './user.actions';

const initState = {
	user: null,
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				user: action.payload.userData,
			};
		case REMOVE_USER:
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

export default userReducer;
