import { createStore } from 'redux';
import { combineReducers } from 'redux';
import usersReducer from './users.reducer.js';

const allReducers = combineReducers({
	users: usersReducer,
});
const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
