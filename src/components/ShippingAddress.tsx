import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DialogDemo } from '@/components/AddShippingAddress';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthUser, getUserToken } from '@/lib/cookie';
import { CreateOrder } from '@/lib/api-routes';
import { toast } from 'sonner';
import { useRef, useState } from 'react';

const user = getAuthUser();
export const Address = user;

function ShippingAddress() {
  const orderInstructionsRef = useRef<HTMLTextAreaElement>(null);

  const [isOrdering, setIsOrdering] = useState(false);
  const navigate = useNavigate();

  const MakeOrder = async () => {
    setIsOrdering(true);

    const user = getAuthUser();
    const token = getUserToken();
    const cartId = localStorage.getItem('cartId');

    const orderData = {
      cartId: cartId,
      customerId: user.userId,
      shippingFee: 0,
      totalAmount: 0,
      orderInstructions: orderInstructionsRef.current?.value || ''
    };

    try {
      const response = await fetch(CreateOrder, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        const data = await response.json();

        const getOrderId = data.orderId;
        localStorage.setItem('orderId', getOrderId);

        toast.success('Order placed successfully!');
        setTimeout(() => {
          navigate('/shop-payment');
        }, 1000);
      } else {
        const errorData = await response.text();

        toast.error(errorData);
      }
    } catch (error) {
      toast.error('Failed to create order. Please try again.');
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="">
      <div className="bg-white  rounded-[8px] max-h-min px-5 py-4 md:py-0 md:px-10 md:pt-5 pb-5 md:mb-5">
        <h3 className="md:mb-5 mb-3 font-semibold text-base leading-6">Shipping Address</h3>
        <div className="border border-primary   rounded-[8px] flex gap-2 px-2 flex-col md:flex-row md:justify-between md:px-5 py-2">
          <div>
            <div className="text-primary font-medium md:font-normal text-sm md:text-[13px]">
              {Address.lastName}
              <span className="mx-1">{Address.firstName}</span>
            </div>
            <div className="font-medium text-sm md:text-[13px]">{Address?.company}</div>
            <div className="font-normal text-[13px] md:text-[12px]">{Address?.address?.street}</div>
            <div className="font-normal text-[13px] md:text-[12px]">
              <span className="text-[13px] md:text-[12px]">
                {Address?.address?.city},{Address?.address?.zipcode}
              </span>
            </div>
            <div className="text-[13px] md:text-[12px]">{Address?.address?.country}</div>
          </div>
          <div>
            <div className=" text-[13px] md:text-[12px]">
              <span className="text-[#616161]">Tel:</span>
              <span>{Address.workPhone}</span>
            </div>
            <div className="text-[13px] md:text-[12px]">
              <span className="text-[#616161]">Email:</span>
              <span>{Address.email}</span>
            </div>
          </div>
        </div>
        <div className="md:mt-6 my-6 md:my-0">
          <DialogDemo />
        </div>
        <div>
          {' '}
          <p className="md:font-medium font-semibold text-sm md:text-[15px] my-1 md:my-4">
            Add Delivery Note
          </p>
          <Textarea
            className="rounded-[8px] h-[80px] md:h-[60px] bg-muted bordr-none  p-5 bg-[#f2f2f2] placeholder:text-[12px] placeholder:leading-4 md:placeholder:leading-5"
            placeholder="Notes about your order eg special notes for delivery "
            ref={orderInstructionsRef}
          />
        </div>
        <div></div>
        <div>
          <div className="flex justify-between mt-5 md:mt-4  md:pb-2">
            <Link to="/shop">
              <Button
                className="flex gap-2 rounded-[6px] md:rounded-[10px]  md:w-[109px] h-8 md:h-10"
                variant="outline"
              >
                <span>
                  <ChevronLeft className="w-4 h-4" />
                </span>
                <span className="text-sm">Back</span>
              </Button>
            </Link>

            <Button
              onClick={MakeOrder}
              className="flex gap-2 bg-primary rounded-[6px] h-8 md:rounded-[10px] md:min-w-[109px] md:h-10 text-white px-3"
              variant="outline"
              disabled={isOrdering}
            >
              {isOrdering ? 'Placing Order...' : 'Next'}

              <span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ShippingAddress;
