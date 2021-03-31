export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.p.id === cartItemToAdd.p.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.p.id === cartItemToAdd.p.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};