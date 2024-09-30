import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DialogDemo } from '@/components/AddShippingAddress';
import { Link } from 'react-router-dom';
const Address = {
  name: 'Rahmah Nanyonga',
  companyName: 'LTA Farm Logistics ltd',
  tel: '0709742563',
  email: 'nanah@nanah.com',
  street: 'Speke Road',
  country: 'Uganda',
  city: 'Enttebe',
  zipcode: '12345'
};

function ShippingAddress() {
  return (
    <div className="">
      <div className="bg-white  rounded-[8px] max-h-min px-10 pt-5 pb-5 mb-5">
        <h3 className="mb-5 font-semibold md:text-base leading-6">Shipping Address</h3>
        <div className="border border-primary   rounded-[8px] flex gap-2 px-2 flex-col md:flex-row md:justify-between md:px-5 py-2">
          <div>
            <div className="text-primary font-normal text-[13px]">{Address.name}</div>
            <div className="font-medium text-[13px]">{Address.companyName}</div>
            <div className="font-normal text-[12px]">{Address.street}</div>
            <div className="font-normal text-[12px]">
              <span className="text-[12px]">
                {Address.city},{Address.zipcode}
              </span>
            </div>
            <div className="text-[12px]">{Address.country}</div>
          </div>
          <div>
            <div className="text-[12px]">
              <span className="text-[#616161]">Tel:</span>
              <span>{Address.tel}</span>
            </div>
            <div className="text-[12px]">
              <span className="text-[#616161]">Email:</span>
              <span>{Address.email}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <DialogDemo />
        </div>
        <div>
          {' '}
          <p className="font-medium text-[15px] my-4">Add Delivery Note</p>
          <Textarea
            className="rounded-[8px] bg-muted  px-5 bg-[#f2f2f2] placeholder:text-[12px]"
            placeholder="Notes about your order eg special notes for delivery "
          />
        </div>
        <div></div>
        <div>
          <div className="flex justify-between mt-4">
            <Link to="/shop-items">
              <Button className="flex gap-2 rounded-[10px] w-[109px] h-10" variant="outline">
                <span>
                  <ChevronLeft className="w-4 h-4" />
                </span>
                Back
              </Button>
            </Link>
            <Link to="/shop-payment">
              <Button
                className="flex gap-2 bg-primary rounded-[10px] w-[109px] h-10 text-white px-3"
                variant="outline"
              >
                Next
                <span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ShippingAddress;
