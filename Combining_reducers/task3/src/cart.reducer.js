import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
	productCart: [],
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			const newCart = state.productCart.concat(action.payload.productData);
			return {
				...state,
				productCart: newCart,
			};
		case REMOVE_PRODUCT:
			const newProductCart = state.productCart.filter(
				(product) => product.id !== action.payload.productId
			);
			return {
				...state,
				productCart: newProductCart,
			};

		default:
			return state;
	}
};

export default cartReducer;
