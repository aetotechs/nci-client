import { Edit } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

import { useLocation } from 'react-router-dom';
export interface IItems {
  name: string;
  subtotal: string;
  bags: number;
  lotNumber: string;
  warehouse: string;
  quantity: number;
}

interface OrderProps {
  items: IItems[];
}
const Address = {
  name: 'Rahmah Nanyonga',
  companyName: 'LTA Farm Logistics ltd',
  tel: '0709742563',
  email: 'nanah@nanah.',
  street: 'Speke Road',
  country: 'Uganda',
  city: 'Entebe',
  zipcode: '12345'
};

export const myitems = [
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 3,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  }
];
function OrderItems({ items }: OrderProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      {pathname === '/close-shop' || pathname === '/profile' ? null : (
        <h3 className="font-medium text-[14px]">Order Items(2)</h3>
      )}
      {pathname === '/shop-payment' ? (
        <div className="md:mt-7 mt-2 rounded-[8px] border md:my-4  p-3 flex justify-between ">
          <div>
            {' '}
            <div className="text-primary font-medium md:font-normal text-sm md:text-[13px]">
              {Address.name}
            </div>
            <div className="font-semibold text-[12px]">{Address.companyName}</div>
            <div className="font-normal text-[13px] md:text-[12px]">{Address.street}</div>
            <div className="font-normal text-[13px] md:text-[12px]">
              {' '}
              {Address.city},{Address.zipcode}
            </div>
            <div className="font-normal text-[13px] md:text-[12px]">{Address.country}</div>
            <div className="text-[13px] md:text-[12px]">
              <span className="text-[#616161]">Tel:</span>
              <span>{Address.tel}</span>
            </div>
            <div>
              <span className="text-[#616161]">Email:</span>
              <span>{Address.email}</span>
            </div>
          </div>
          <div className="mt-3">
            <Edit className="w-4 h-4 text-primary" />
          </div>
        </div>
      ) : (
        <ScrollArea className="h-[200px] ">
          <div
            className={`${pathname === '/close-shop' && 'md:px-5'} flex flex-col gap-2 md:gap-4 my-2 md:my-6  `}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="border flex rounded-[8px] max-h-[90px] items-center  px-5 py-2 justify-between"
              >
                <div>
                  <h4 className={`font-medium text-[13px] ${pathname === '/profile' && 'text-sm'}`}>
                    {item.name}
                  </h4>
                  <p
                    className={`text-textmuted text-[12px] ${pathname === '/profile' && 'text-[13px]'}`}
                  >
                    {item.bags} Bag(s)
                  </p>
                </div>
                <div
                  className={`font-semibold text-[12px] ${pathname === '/profile' && 'text-sm'}`}
                >
                  {item.subtotal}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

export default OrderItems;
