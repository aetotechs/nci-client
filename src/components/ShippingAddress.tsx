import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DialogDemo } from '@/components/AddShippingAddress';
import { Link } from 'react-router-dom';
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

function ShippingAddress() {
  return (
    <div className="">
      <div className="w-[714px] bg-white h-[560px] rounded-[8px] px-10 py-5">
        <h3 className="mb-5 font-semibold text-[22px] leading-6">Shipping Address</h3>
        <div className="border border-primary w-[622px] h-[150px] rounded-[8px] flex justify-between px-10 py-5">
          <div>
            <div className="text-primary font-normal text-base">{Address.name}</div>
            <div className="font-medium text-base">{Address.companyName}</div>
            <div className="font-normal text-sm">{Address.street}</div>
            <div className="font-normal text-sm">
              <span>
                {Address.city},{Address.zipcode}
              </span>
            </div>
            <div>{Address.country}</div>
          </div>
          <div>
            <div>
              <span>Tel:</span>
              <span>{Address.tel}</span>
            </div>
            <div>
              <span>Email:</span>
              <span>{Address.email}</span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <DialogDemo />
        </div>
        <div>
          {' '}
          <p className="font-medium text-[20px] my-4">Add Delivery Note</p>
          <Textarea
            className="rounded-[8px] bg-muted h-[84px] px-5"
            placeholder="Notes about your order eg special notes for delivery "
          />
        </div>
        <div></div>
        <div>
          <div className="flex justify-between mt-4">
            <Link to="/shop-items">
              <Button className="flex gap-2 rounded-[10px] w-[109px] h-[43px]" variant="outline">
                <span>
                  <ChevronLeft className="w-4 h-4" />
                </span>
                Back
              </Button>
            </Link>
            <Link to="/shop-payment">
              <Button
                className="flex gap-2 bg-primary rounded-[10px] w-[109px] h-[43px] text-white px-3"
                variant="outline"
              >
                <span>
                  <ChevronRight className="w-4 h-4" />
                </span>
                Next
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
