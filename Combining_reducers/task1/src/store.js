import { createStore, combineReducers } from 'redux';
import usersReducer from './users.reducer';
import counterReducer from './counter.reducer';

const jonedReducer = combineReducers({
	counter: counterReducer,
	users: usersReducer,
});

const store = createStore(jonedReducer);

export default store;
