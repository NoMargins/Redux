import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import weatherReducer from './weather.reducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
	weather: weatherReducer,
});

const composeEnhensers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;

// const logger = (state) => (next) => (action) => {
// 	console.group(action.type);
// 	console.info('dispatching', action);
// 	let result = next(action);
// 	console.log('next state', store.getState());
// 	console.groupEnd();
// };

// const thunk = (store) => (next) => (action) => {
// 	if (typeof action === 'function') {
// 		return action(store.dispatch, store.getState);
// 	}

// 	return next(action);
// };
