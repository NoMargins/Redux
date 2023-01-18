import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import tasksReducer from './tasks/tasks.reducer';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
	tasks: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combinedReducers,
	composeEnhancers(applyMiddleware(thunk))
);

export default store;
