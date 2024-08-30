import React from 'react';

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
  return (
    <div>
      <h3 className="font-medium text-xl">Order Items(2)</h3>
      <div className="flex flex-col gap-4 my-6">
        {myitems.map((item, index) => (
          <div
            key={index}
            className="border flex w-[403px] h-[94px] rounded-[8px] px-10 py-5 items-center"
          >
            <div>
              <h4 className="font-medium text-base">{item.name}</h4>
              <p>{item.bags} Bag(s)</p>
            </div>
            <div className="font-semibold">{item.subtotal}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItems;
