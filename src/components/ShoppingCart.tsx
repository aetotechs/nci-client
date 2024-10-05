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
    <div className=" md:mx-5 bg-white px-2 py-4 md:px-10 md:py-5  flex flex-col rounded-[8px]">
      <div className="flex justify-between mb-4 md:mb-0">
        <h3 className="font-bold   text-base">Shopping Cart</h3>
        <div className="flex items-center gap-1">
          <Checkbox className="h-4 w-4" />
          <p className="text-[13px] font-medium">Select All (2)</p>
        </div>
      </div>
      <div className="  ">
        <ItemsTable items={items} />
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
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
          onClick={HandleClear}
          className="flex gap-2 bg-red-500 border-none rounded-[6px] md:rounded-[10px] h-8 md:h-10 text-white px-3"
          variant="outline"
        >
          <span>
            <Trash2 className=" h-3 w-3 md:w-4 md:h-4" />
          </span>
          <span className="font-normal text-sm"> Clear Cart</span>{' '}
        </Button>
      </div>
    </div>
  );
}

export default ShoppingCart;
