export const GO_NEXT = 'USERS/NEXT';
export const GO_PREV = 'USERS/PREV';

export const nextPage = () => {
	return {
		type: GO_NEXT,
	};
};

export const prevPage = () => {
	return {
		type: GO_PREV,
	};
};
