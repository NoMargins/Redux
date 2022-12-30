import { SETLANGUAGE } from './language.actions';

const initialState = {
	language: 'en',
};

const languageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SETLANGUAGE:
			return {
				...state,
				language: action.payload.language,
			};
		default:
			return state;
	}
};

export default languageReducer;
