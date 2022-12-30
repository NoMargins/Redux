import store, { increment, decrement, reset, counterReducer } from './store.js';

import './index.scss';

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const counterResultElem = document.querySelector('.counter__result');

const onIncrement = () => {
	store.dispatch(increment());
};

incrementBtn.addEventListener('click', onIncrement);

const onDecrement = () => {
	store.dispatch(decrement());
};

decrementBtn.addEventListener('click', onDecrement);

const onReset = () => {
	store.dispatch(reset());
};

resetBtn.addEventListener('click', onReset);

store.subscribe(() => {
	const state = store.getState();
	const currentValue = state.history.reduce((acc, num) => acc + num, 0);
	const historyString = state.history
		.map((el) => {
			if (el > 0) {
				return `+${el}`;
			} else {
				return el;
			}
		})
		.join('');
	counterResultElem.textContent =
		state.history.length === 0 ? '' : `${historyString} = ${currentValue}`;
});
