import store from './store.js';
import { addUser, removeUser } from './users.actions.js';

store.dispatch(addUser({ id: 100, name: 'Alex' }));
store.dispatch(addUser({ id: 170, name: 'Oleks' }));
store.dispatch(addUser({ id: 78, name: 'Anna' }));
store.dispatch(removeUser(170));

console.log(store.getState());
