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
      <div className="md:my-5 mx-auto  w-[100vw] overflow-x-hidden  ">
        <Header status={status} />

        <div>
          <div className="md:h-screen  md:my-7 px-4 flex flex-col gap-20 md:grid md:grid-cols-5 md:gap-5 md:place-content-center my-5">
            <div className="col-span-3">
              <div className="md:w-[528px] h-[345px]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="rounded-full w-[40px] h-[40px] bg-iconbackground flex items-center justify-center">
                    <Check className="text-white h-10 w-8" />
                  </div>
                  <h3 className="font-semibold text-2xl leading-10">Thank you for your order!</h3>
                </div>
                <div>
                  <p className="text-sm md:pr-7 md:w-[436px] mb-4 text-textmuted">
                    Your order has been received. We will notify you by email once your order has
                    been shipped
                  </p>
                  <div className="w-[416px]">
                    <h5 className="font-semibold text-[21px] leading-tight mb-4">
                      Shipping Address
                    </h5>
                    <div className="flex my-1">
                      <h6>Name:</h6>
                      <p>{Address.name}</p>
                    </div>
                    <div className="flex  my-1">
                      <h6>Company:</h6>
                      <p>{Address.companyName}</p>
                    </div>
                    <div className="flex  my-1">
                      <h6>Address:</h6>
                      <p>
                        {Address.street},{Address.city},{Address.zipcode},{Address.country}
                      </p>
                    </div>
                    <div className="flex  my-1">
                      <h6>Tel:</h6>
                      <p>{Address.tel}</p>
                    </div>
                    <div className="flex  my-1">
                      <h6>Email:</h6>
                      <p>{Address.email}</p>
                    </div>
                  </div>
                  <div>
                    <Link to="/shop">
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
            <div className="md:col-span-2 bg-white h-[630px]   md:h-[557px]">
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
