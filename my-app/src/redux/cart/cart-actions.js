import { CartActionTypes } from './cart-types';

export const setAddToItem = item => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item
});

