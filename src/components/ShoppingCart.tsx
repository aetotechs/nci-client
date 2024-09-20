import { useEffect, useState } from 'react';
import { IItems, ItemsTable } from '@/components/tables/ItemsTable';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Trash2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

const myitems = [
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 'Credit Card',
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 'PayPal',
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  }
];

function ShoppingCart() {
  const [items, setItems] = useState<IItems[]>([]);
 

  useEffect(() => {
    const fetchedItems = myitems;

    setItems(fetchedItems);
  }, [items]);
  const HandleClear = () => {
    setItems([]);
  };

  return (
    <div className="md:w-[714px] w-[90vw] mx-5 h-[560px] bg-white p-10  flex flex-col rounded-[8px]">
      <div className="flex justify-between">
        <h3 className="font-bold md:text-2xl">Shopping Cart</h3>
        <div className="flex items-center gap-2">
          <Checkbox />
          <p className="text-base font-medium">Select All</p>
        </div>
      </div>
      <div className="max-w-[700px] overflow-hidden ">
        <ItemsTable items={items} />
      </div>
      <div className="flex justify-between mt-4">
        <Link to="/shop">
          <Button className="flex gap-2 rounded-[10px] w-[109px] h-[43px]" variant="outline">
            <span>
              <ChevronLeft className="w-4 h-4" />
            </span>
            Back
          </Button>
        </Link>
        <Button onClick={HandleClear}
          className="flex gap-2 bg-red-500 rounded-[10px] w-[109px] h-[43px] text-white px-3"
          variant="outline">
          <span>
            <Trash2 className="w-4 h-4" />
          </span>
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default ShoppingCart;
