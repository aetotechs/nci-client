import Header from '@/components/user/other/Header';
import Progress from '@/components/user/other/cart/Progress';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PaymentComponent from '@/components/user/other/PaymentComponent';
import OrderItems from '@/components/user/other/OrderItems';
import { useLoading } from '@/utils/context/LoaderContext';
import { api_urls } from '@/utils/commons/api-urls';
import { getUserToken } from '@/utils/cookies/UserCookieManager';
import { ErrorToast } from '@/components/common/ui/Toasts';

const orderId = localStorage.getItem('orderId');
const token = getUserToken();

function Payment() {
  const { pathname } = useLocation();
  const { dispatchLoader } = useLoading();
  const [order, setOrder] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    fetchOrder();
  },[]);

  const fetchOrder = async () => {
    dispatchLoader(true);
    try {
      const response = await fetch(api_urls.orders.get_order_by_id(orderId), {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const res = await response.json();
        console.log(res);
        setOrder(res);
      } else {
        const responseMessage = await response.text();
        ErrorToast(responseMessage);
      }
    } catch (error: any) {
      ErrorToast('Error occurred during order fetch, ' + error.toString());
    } finally {
      dispatchLoader(false);
    }
  };

  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]     ">
        <Header/>

        <div className="px-5 md:px-0">
          <div className=" md:flex md:justify-center my-5   md:my-10 ">
            <Progress />
          </div>
          <div className=" flex flex-col gap-5 md:flex-row ">
            <div className="md:w-[60vw]">
              <PaymentComponent orderId={orderId || ''} />
            </div>
            <div className="md:w-[30vw]">
              <h3 className={` font-semibold text-[15px] my-2 md:px-5`}>Order Summary</h3>
              <div className="flex flex-col text-[12px] gap-3 md:px-4 ">
                <div className={`flex justify-between mt-1 `}>
                  <p className="font-normal  text-textmuted">OrderID</p>
                  <h3 className="font-medium ">{order.orderId || ''} </h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal  text-textmuted">Order sub total</p>
                  <h3 className="font-semibold text-[14px]">${order.totalAmount || 0}</h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal  text-textmuted">Shipping</p>
                  <h3 className="font-medium ">{order.shippingFee || 'unknown'}</h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal  text-textmuted">Standard VAT</p>
                  <h3 className="font-medium ">${0}</h3>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal  text-textmuted">Order total</p>
                  <h3 className="font-semibold text-[14px]">${order.totalAmount + order.shippingFee || 0}</h3>
                </div>
                <OrderItems items={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
