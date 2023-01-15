export const CHOOSE_USERS = 'OPTIONS/CHOOSE_USERS';

const searchTextAction = (filterText) => {
	return {
		type: CHOOSE_USERS,
		payload: {
			filterText,
		},
	};
};

export default searchTextAction;
