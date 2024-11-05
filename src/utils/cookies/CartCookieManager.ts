import { IProduct } from "../commons/TypeInterfaces";

interface CartItem {
  product: IProduct;
  quantity: number;
  selected: boolean;
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

export const incrementCartQuantity = (cart: CartItem[], productId: string): CartItem[] => {
  return cart.map(item =>
      item.product.itemId === productId ? { ...item, quantity: item.quantity + 1 } : item
  );
};

export const decrementCartQuantity = (cart: CartItem[], productId: string): CartItem[] => {
  return cart.map(item =>
      item.product.itemId === productId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
  );
};

export const selectCartItem_ = (cart: CartItem[], productId: string, selected: boolean): CartItem[] => {
  return cart.map(item =>
      item.product.itemId === productId ? { ...item, selected } : item
  );
};

export const selectAllCartItems_ = (cart: CartItem[], selected: boolean): CartItem[] => {
  return cart.map(item => ({ ...item, selected }));
};

export const clearCart = (): CartItem[] => {
  return [];
};