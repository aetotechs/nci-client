import { useState, useEffect } from 'react';
import { addToCart, clearCart, removeFromCart, updateCartQuantity } from '../cookies/CartCookieManager';

interface CartItem {
  product: any;
  quantity: number;
}

const CART_STORAGE_KEY = 'nci_user_cart';

const loadCartFromStorage = (): CartItem[] => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (cart: CartItem[]) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export function useCart() {
    const [cart, setCart] = useState<CartItem[]>(loadCartFromStorage);

    useEffect(() => {
        saveCartToStorage(cart);
    }, [cart]);

    const addProductToCart = (newItem: CartItem) => {
        setCart(currentCart => addToCart(currentCart, newItem));
    };

    const removeProductFromCart = (productId: string) => {
        setCart(currentCart => removeFromCart(currentCart, productId));
    };

    const updateProductQuantity = (productId: string, quantity: number) => {
        setCart(currentCart => updateCartQuantity(currentCart, productId, quantity));
    };

    const clearCartItems = () => {
        setCart(clearCart());
    };

    return {
        cart,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        clearCartItems,
    };
}