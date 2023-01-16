import { getUserData } from './gateway.js';

export const SHOW_SPINNER = 'USER/SHOW_SPINNER';
export const USERDATA = 'USER/USERDATA';

export const showSpinner = () => {
	return {
		type: SHOW_SPINNER,
	};
};

export const userDataFetching = (fetchedUserData) => {
	return {
		type: USERDATA,
		payload: {
			fetchedUserData,
		},
	};
};

export const fetchUserAction = (userName) => {
	return function (dispatch) {
		dispatch(showSpinner());
		getUserData(userName).then((userData) => {
			dispatch(userDataFetching(userData));
		});
	};
};
