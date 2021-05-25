import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD, CART_EMPTY } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;   //new product/new qty num of existing product obj
            const existItem = state.cartItems.find(x => x.product === item.product);  //existing product in state
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.product === existItem.product ? item : x)   //add new qty num of existing product obj
                }
            }
            else {
                return { ...state, cartItems: [...state.cartItems, item] }   //add new product
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)

            };

        case CART_SAVE_SHIPPING_ADDRESS:
            return { ...state, shippingAddress: action.payload };

        case CART_SAVE_PAYMENT_METHOD:
            return { ...state, paymentMethod: action.payload };
        case CART_EMPTY:
            return { ...state, cartItems: [] };
        default:
            return state;
    }
};