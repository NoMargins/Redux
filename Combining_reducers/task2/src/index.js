import store from './counter.js';
import { increment, decrement, reset } from './counter.js';

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(increment());

console.log(store.getState());
