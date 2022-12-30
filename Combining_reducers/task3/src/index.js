import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ id: 1, name: 'iPHONE', price: '$700' }));
store.dispatch(addProduct({ id: 2, name: 'iMax', price: '$1990' }));
store.dispatch(addProduct({ id: 3, name: 'iAllo', price: '$0.99' }));

store.dispatch(setUser({ name: 'Alex', balance: '$2000' }));

console.log(store.getState());

store.dispatch(removeProduct(3));
store.dispatch(removeUser());

console.log(store.getState());
