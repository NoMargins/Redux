export const ADDUSER = 'USERS/ADD';
export const REMOVEUSER = 'USERS/REMOVE';

export const addUser = (userData) => {
	return {
		type: ADDUSER,
		newUser: userData,
	};
};

export const removeUser = (userId) => {
	return {
		type: REMOVEUSER,
		id: userId,
	};
};
