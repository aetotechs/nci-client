import { useEffect, useState } from 'react';
import { Button } from '@/components/common/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Checkbox } from '@/components/common/ui/checkbox';
import { Link } from 'react-router-dom';
import { DeleteDialog } from './ClearCartDialog';
import { IItems, ITableProps, ItemsTable } from '../../admin/tables/ItemsTable';

function ShoppingCart({ items }: ITableProps) {
  const [ Items, setItems ] = useState<IItems[]>([]);
  const [ preferredItems, setPreferredItems ] = useState<IItems[]>([]);
  const [ checkedStates, setCheckedStates ] = useState<boolean[]>(new Array(items.length).fill(false));
  const [ selectAll, setSelectAll ] = useState<boolean>(false);

  useEffect(() => {
    const fetchedItems = items;
    setItems(fetchedItems);

    const storedCheckedStates = localStorage.getItem('checkedStates');
    if (storedCheckedStates) {
      setCheckedStates(JSON.parse(storedCheckedStates));
    } else {
      setCheckedStates(new Array(items.length).fill(false));
    }
  }, [items]);
  
  useEffect(() => {
    setSelectAll(checkedStates.every((state) => state));
  }, [checkedStates]);

  const handleClear = () => {
    setItems([]);
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const newCheckedStates = new Array(items.length).fill(newSelectAll);
    setCheckedStates(newCheckedStates);
    localStorage.setItem('checkedStates', JSON.stringify(newCheckedStates));

    if (newSelectAll) {
      setPreferredItems(items);
      localStorage.setItem('preferredItems', JSON.stringify(items));
    } else {
      setPreferredItems([]);
      localStorage.setItem('preferredItems', JSON.stringify([]));
    }
  };

  return (
    <div className="md:mx-5 bg-white px-2 py-4 md:px-10 md:py-5 flex flex-col rounded-[8px]">
      <div className="flex justify-between mb-4 md:mb-0">
        <h3 className="font-bold text-base">Shopping Cart</h3>
        <div className="flex items-center gap-1">
          <Checkbox className="h-4 w-4" checked={selectAll} onCheckedChange={handleSelectAll} />
          <p className="text-[13px] font-medium">
            Select All <span>({items.length})</span>
          </p>
        </div>
      </div>
      <div className="">
        <ItemsTable
          items={items}
          checkedStates={checkedStates}
          setCheckedStates={setCheckedStates}
        />
      </div>
      <div className="flex justify-between mt-3 md:mt-4">
        <Link to="/coffee-shop">
          <Button
            className="flex gap-2 rounded-[6px] md:rounded-[10px] md:w-[109px] h-8 md:h-10"
            variant="outline"
          >
            <span>
              <ChevronLeft className="w-4 h-4" />
            </span>
            <span className="text-sm">Back</span>
          </Button>
        </Link>
        <DeleteDialog />
      </div>
    </div>
  );
}

export default ShoppingCart;
