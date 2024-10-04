import { Edit } from 'lucide-react';

import { useLocation } from 'react-router-dom';
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

const myitems = [
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
function OrderItems() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      {pathname === '/close-shop' ? null : (
        <h3 className="font-medium text-[14px]">Order Items(2)</h3>
      )}
      {pathname === '/shop-payment' ? (
        <div className="mt-7 rounded-[8px] border md:my-4  p-3 flex justify-between ">
          <div>
            {' '}
            <div className="font-semibold text-[13px]">{Address.name}</div>
            <div className="font-semibold text-[12px]">{Address.companyName}</div>
            <div className="text-[12px] text-textsecondary">{Address.street}</div>
            <div className="text-[12px] text-textsecondary">
              {' '}
              {Address.city},{Address.zipcode}
            </div>
            <div className="text-[12px] textsecondary">{Address.country}</div>
            <div className="text-[12px]">
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
        <div className={`${pathname === '/close-shop' && 'md:px-5'} flex flex-col gap-4 my-6 `}>
          {myitems.map((item, index) => (
            <div
              key={index}
              className="border flex rounded-[8px] max-h-[90px] items-center  px-5 py-2 justify-between"
            >
              <div>
                <h4 className="font-medium text-[13px]">{item.name}</h4>
                <p className="text-textmuted text-[12px]">{item.bags} Bag(s)</p>
              </div>
              <div className="font-semibold text-[12px]">{item.subtotal}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderItems;
