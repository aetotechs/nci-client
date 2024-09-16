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
      {pathname === '/close-shop' ? null : <h3 className="font-medium text-xl">Order Items(2)</h3>}
      {pathname === '/shop-payment' ? (
        <div className="mt-7  md:w-[380px] h-[186px] rounded-[8px] border px-10 py-3 flex justify-between ">
          <div>
            {' '}
            <div className="font-semibold text-base">{Address.name}</div>
            <div className="font-semibold text-sm">{Address.companyName}</div>
            <div className="text-sm text-textsecondary">{Address.street}</div>
            <div className="text-sm text-textsecondary">
              {' '}
              {Address.city},{Address.zipcode}
            </div>
            <div className="text-sm textsecondary">{Address.country}</div>
            <div className="text-sm">
              <span>Tel:</span>
              <span>{Address.tel}</span>
            </div>
            <div>
              <span>Email:</span>
              <span>{Address.email}</span>
            </div>
          </div>
          <div className="mt-3">
            <Edit className="w-5 h-5 text-primary" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 my-6">
          {myitems.map((item, index) => (
            <div
              key={index}
              className="border flex md:w-[400px] h-[94px] rounded-[8px] px-10 py-5 items-center"
            >
              <div>
                <h4 className="font-medium text-base">{item.name}</h4>
                <p className="text-textmuted">{item.bags} Bag(s)</p>
              </div>
              <div className="font-semibold">{item.subtotal}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OrderItems;
