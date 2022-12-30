import { SETLANGUAGE } from './language.actions';
import { initialState } from './store.js';

const languageReducer = (state = initialState.language, action) => {
	switch (action.type) {
		case SETLANGUAGE:
			return action.payload.language;
		default:
			return state;
	}
};

export default languageReducer;
