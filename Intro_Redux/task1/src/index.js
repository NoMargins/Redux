import { createStore } from 'redux';

const increment = 'COUNTER/INCREMENT';
const decrement = 'COUNTER/DECREMENT';

const incrementAction = () => {
	return {
		type: increment,
	};
};

const decrementAction = () => {
	return {
		type: decrement,
	};
};

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

const store = createStore(counterReducer);

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

console.log(store.getState());
