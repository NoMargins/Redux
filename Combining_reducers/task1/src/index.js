import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(increment());

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Angela' }));
store.dispatch(addUser({ id: 3, name: 'Indigo', age: 13 }));
store.dispatch(updateUser(3, { name: 'Santiago' }));

console.log(store.getState());
