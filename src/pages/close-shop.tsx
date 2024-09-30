import Header from '@/components/Header';

import OrderSummary from '@/components/OrderSummary';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '@/components/Footer';
import { IStatus } from '@/App';
import { useEffect } from 'react';

const Address = {
  name: 'Rahmah Nanyonga',
  companyName: 'LTA Farm Logistics ltd',
  tel: '0709742563',
  email: 'nanah@nanah.',
  street: 'Speke Road',
  country: 'Uganda',
  city: 'Enttebe',
  zipcode: '12345'
};

function ClosedOrder({ status }: IStatus) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="md:px-[5vw] md:max-w-[100vw]  px-5   ">
      <Header status={status} />

        <div>
          <div className="md:h-screen  md:my-10 px-4 flex flex-col md:flex-row  gap-20  md:place-content-center my-5">
            <div className="">
              <div className="md:w-[50vw]  ">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full w-[40px] h-[40px] bg-iconbackground flex items-center justify-center">
                    <Check className="text-white h-10 w-8" />
                  </div>
                  <h3 className="font-semibold text-2xl leading-10">Thank you for your order!</h3>
                </div>
                <div>
                  <p className="text-sm md:pr-7  mb-4 text-textmuted">
                    Your order has been received. We will notify you by email once your order has
                    been shipped
                  </p>
                  <div className="w-[416px] text-sm ">
                    <h5 className="font-semibold text-[18px] leading-tight mb-2">
                      Shipping Address
                    </h5>
                    <div className="flex my-1 gap-1 ">
                      <h6 className='text-[#616161]'>Name:</h6>
                      <p>{Address.name}</p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className='text-[#616161]'>Company:</h6>
                      <p>{Address.companyName}</p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className='text-[#616161]'>Address:</h6>
                      <p>
                        {Address.street}, {Address.city}, {Address.zipcode}, {Address.country}
                      </p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className='text-[#616161]'>Tel:</h6>
                      <p>{Address.tel}</p>
                    </div>
                    <div className="flex  my-1 gap-1">
                      <h6 className='text-[#616161]'>Email:</h6>
                      <p>{Address.email}</p>
                    </div>
                  </div>
                  <div>
                    <Link to="/coffee-shop">
                      <Button
                        variant="outline"
                        className="border border-primary bg-white h-[44px] w-[207px] my-6"
                      >
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[30vw] bg-white max-h-max   ">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ClosedOrder;
