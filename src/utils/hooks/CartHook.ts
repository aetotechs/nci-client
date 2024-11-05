import { useState, useEffect } from 'react';
import { 
    addToCart, 
    clearCart, 
    removeFromCart, 
    updateCartQuantity, 
    incrementCartQuantity, 
    decrementCartQuantity, 
    selectCartItem_, 
    selectAllCartItems_ 
} from '../cookies/CartCookieManager';
import { IProduct } from '../commons/TypeInterfaces';

interface CartItem {
  product: IProduct;
  quantity: number;
  selected: boolean;
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

    const incrementProductQuantity = (productId: string) => {
        setCart(currentCart => incrementCartQuantity(currentCart, productId));
    };

    const decrementProductQuantity = (productId: string) => {
        setCart(currentCart => decrementCartQuantity(currentCart, productId));
    };

    const clearCartItems = () => {
        setCart([]);
    };

    function selectAllCartItems(selectAll: boolean) {
        setCart(prevCart =>
        prevCart.map(item => ({ ...item, selected: selectAll }))
        );
    }
  
    function selectCartItem(itemId: string, isSelected: boolean) {
        setCart(prevCart =>
        prevCart.map(item =>
            item.product.itemId === itemId ? { ...item, selected: isSelected } : item
        )
    );
    }

    const calculateSubtotal = () => {
        return cart
            .filter(item => item.selected)
            .reduce((subtotal, item) => subtotal + item.quantity * item.product.unitPrice, 0);
    };

    const areAllSelected = cart.length > 0 && cart.every(item => item.selected);

    return {
        cart,
        addProductToCart,
        removeProductFromCart,
        updateProductQuantity,
        incrementProductQuantity,
        decrementProductQuantity,
        clearCartItems,
        selectCartItem,
        selectAllCartItems,
        calculateSubtotal,
        areAllSelected
    };
}