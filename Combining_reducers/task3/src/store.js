import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

export const initialState = {
	language: 'en',
	user: null,
	cart: {
		products: [],
	},
};

const jointedReducer = combineReducers({
	language: languageReducer,
	cart: cartReducer,
	user: userReducer,
});

const store = createStore(
	jointedReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
