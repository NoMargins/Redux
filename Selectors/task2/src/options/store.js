import { createStore } from 'redux';
import { combineReducers } from 'redux';
import optionsReducer from './options.reducer.js';

const allReducers = combineReducers({
	options: optionsReducer,
});
const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
