import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';
import { initialState } from './store.js';

// const initialState = {
// 	products: [],
// };

const cartReducer = (state = initialState.cart, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			const newCart = state.products.concat(action.payload.productData);
			return {
				...state,
				products: newCart,
			};
		case REMOVE_PRODUCT:
			const newProductCart = state.products.filter(
				(product) => product.id !== action.payload.productId
			);
			return {
				...state,
				products: newProductCart,
			};
		default:
			return state;
	}
};

export default cartReducer;
