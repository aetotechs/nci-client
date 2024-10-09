import { useEffect, useState } from 'react';
import EmptyCart from '@/components/EmptyCart';
import Header from '@/components/Header';
import CartWithItems from '@/components/CartWithItems';
import Coupon from '@/components/Coupon';
import OrderSummary from '@/components/OrderSummary';
import Progress from '@/components/Progress';
import { IStatus } from '@/App';
import { useLocation } from 'react-router-dom';
import { IItems, ITable } from '@/components/tables/ItemsTable';

function Shop({ status }: IStatus) {
  const [cartItems, setCartItems] = useState<IItems[]>([]);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]'); 
  
        
  
        setCartItems(cartItems); 
        console.log(cartItems)
  
      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCart();
  }, []); 

  
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="md:px-[5vw] lg:my-4 md:max-w-[100vw] overflow-x-hidden">
        <Header status={status} />

        <div className={`px-5 ${cartItems.length === 0 && 'mt-10'} md:px-0`}>
          {loading ? (
            <div className="flex justify-center items-center">
              <p>Loading...</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex justify-center items-center">
              <EmptyCart status={status} />
            </div>
          ) : (
            <>
              <div className="md:flex md:justify-center my-10">
                <Progress />
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[60vw]">
                  <CartWithItems items={cartItems} />
                </div>
                <div className="md:w-[30vw]">
                  <Coupon />
                  <OrderSummary  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
