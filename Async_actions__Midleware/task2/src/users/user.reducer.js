import { SHOW_SPINNER, USERDATA } from './user.actions';

const initialData = {
	userData: null,
	isFetching: false,
};

const userReducer = (state = initialData, action) => {
	switch (action.type) {
		case SHOW_SPINNER:
			return {
				...state,
				isFetching: true,
			};

		case USERDATA:
			return {
				...state,
				userData: action.payload.fetchedUserData,
				isFetching: false,
			};

		default:
			return state;
	}
};

export default userReducer;
