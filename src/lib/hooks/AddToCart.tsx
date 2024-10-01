import { useState } from 'react';
import { getAuthUser, getUserToken } from '../cookie';
import { AddToCart } from '../api-routes';
import { toast } from 'sonner';

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartData {
  customerId: string;
  cartItems: CartItem[];
}

export const useAddToCart = (productId: string, productName: string) => {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});
  const [error, setError] = useState<string | null>(null);

  const addCart = async (productId: string, productName: string, quantity: number = 1) => {
    setAddingStates((prev) => ({ ...prev, [productId]: true }));
    setError(null);

    const user = getAuthUser();
    const customerId = user?.userId;
    const token = getUserToken();

    const cartData: CartData = {
      customerId,
      cartItems: [
        {
          productId,
          quantity
        }
      ]
    };

    try {
      const response = await fetch(AddToCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(cartData)
      });

      if (response.ok) {
        const data = await response.json();
        const cartId = data.cartId;
        localStorage.setItem('cartId', cartId);

        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/cartsuccess.svg" alt="cart" />
            </span>
            <span className="font-bold">{productName}</span> has been added to your cart.
          </div>,
          {
            style: {
              background: '#009A681A',
              color: '#009A68',
              border: '1px solid #009A6880'
            }
          }
        );
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        toast.error(errorMessage, {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
      setError('Try Again Later');
      toast.error('Try Again Later', {
        style: {
          backgroundColor: '#F443361A',
          color: '#FFE6E6',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setAddingStates((prev) => ({ ...prev, [productId]: false }));
    }
  };

  return { addCart, addingStates, error };
};
