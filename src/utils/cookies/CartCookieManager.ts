
interface CartItem {
  product: any;
  quantity: number;
}

export const addToCart = (cart: CartItem[], newItem: CartItem): CartItem[] => {
  const existingItemIndex = cart.findIndex(item => item.product.itemId === newItem.product.itemId);

  if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += newItem.quantity;
  } else {
      cart.push(newItem);
  }

  return [...cart];
};

export const removeFromCart = (cart: CartItem[], productId: string): CartItem[] => {
  return cart.filter(item => item.product.itemId !== productId);
};

export const updateCartQuantity = (cart: CartItem[], productId: string, quantity: number): CartItem[] => {
  return cart.map(item =>
      item.product.itemId === productId ? { ...item, quantity } : item
  );
};

export const clearCart = (): CartItem[] => {
  return [];
};