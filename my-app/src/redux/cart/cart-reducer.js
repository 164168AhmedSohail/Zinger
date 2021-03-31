import { CartActionTypes } from "./cart-types";
import {AddItemToCart} from './cart-utils';
const INITIAL_STATE = {
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  
  
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
