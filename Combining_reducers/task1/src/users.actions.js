export const ADD_USER = 'USERS/ADD';
export const REMOVE_USER = 'USERS/REMOVE';
export const UPDATE_USER = 'USERS/UPDATE';

export const addUser = (userData) => {
	return {
		type: ADD_USER,
		payload: { userData },
	};
};

export const deleteUser = (userId) => {
	return {
		type: REMOVE_USER,
		payload: { userId },
	};
};

export const updateUser = (userId, newUserData) => {
	return {
		type: UPDATE_USER,
		payload: {
			userId,
			newUserData,
		},
	};
};
