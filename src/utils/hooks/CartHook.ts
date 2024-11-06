import { useState, useEffect } from 'react';
import { 
    addToCart, 
    removeFromCart, 
    updateCartQuantity, 
    incrementCartQuantity, 
    decrementCartQuantity,  
} from '../cookies/CartCookieManager';
import { ErrorToast } from '@/components/common/ui/Toasts';
import { getUserToken } from '../cookies/UserCookieManager';
import { ICartItem } from '../commons/TypeInterfaces';

const CART_STORAGE_KEY = 'nci_user_cart';
const user_token = getUserToken();

const loadCartFromStorage = (): ICartItem[] => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
};

const saveCartToStorage = (cart: ICartItem[]) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const fetchServerCart = async () => {
    try {
        const response = await fetch('', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user_token}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            const errorMessage = await response.text();
            ErrorToast(errorMessage);
            return;
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        ErrorToast("Error fetching server cart: " + error);
        return null;
    }
};


export function useCart() {
    const [ cart, setCart ] = useState<ICartItem[]>(loadCartFromStorage);

    useEffect(() => {
        saveCartToStorage(cart);
    }, []);

    useEffect(() => {
        // merge server cart items with local cart items here
    },[])

    const addProductToCart = (newItem: ICartItem) => {
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
        setCart( prevCart => prevCart.map(item => ({ ...item, selected: selectAll })));
        // window.location.reload()
    }
  
    function selectCartItem(itemId: string, isSelected: boolean) {
        setCart(prevCart => prevCart.map(item =>
            item.product.itemId === itemId ? { ...item, selected: isSelected } : item
        ));
        // window.location.reload();
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