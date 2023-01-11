export const ADD = 'COUNTER/ADD';
export const DELETE = 'COUNTER/DELETE';

export const addUser = (userData) => {
	return {
		type: ADD,
		payload: userData,
	};
};

export const deleteUser = (userId) => {
	return {
		type: DELETE,
		payload: userId,
	};
};
