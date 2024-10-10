import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import Counter from '@/components/Counter';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useEffect, useState } from 'react';

// interface {
//   flavor: string;
//   name: string;
//   lotNumber: string;
//   stockAvailable: boolean;
//   stockCount: number;
//   unitPrice: number;
//   wareHouse: string;
//   sampleCount: number;
//   sampleUnitPrice: number;
//   sampleAvailable: boolean;
//   quantity: number;
//   itemId: string;
// }
// export interface CartItems {
//
// }

export interface IItems {
  flavor: string;
  name: string;
  lotNumber: string;
  stockAvailable: boolean;
  stockCount: number;
  unitPrice: number;
  wareHouse: string;
  sampleCount: number;
  sampleUnitPrice: number;
  sampleAvailable: boolean;
  quantity: number;
  itemId: string;
}
export interface ITable {
  items: IItems[];
}

export interface ITableProps {
  items: IItems[];
  checkedStates?: boolean[];
  setCheckedStates?: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export function ItemsTable({ items, checkedStates, setCheckedStates }: ITableProps) {
  const [quantities, setQuantities] = useState<number[]>(new Array(items.length).fill(1));
  const [preferredItems, setPreferredItems] = useState<IItems[]>([]);

  const calculateTotalSubtotal = () => {
    const totalSubtotal = items.reduce((sum, item, index) => {
      if (checkedStates && checkedStates[index]) {
        return sum + item.unitPrice * quantities[index];
      }
      return sum;
    }, 0);

    localStorage.setItem('totalSubtotal', totalSubtotal.toFixed(2));
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;
    setQuantities(updatedQuantities);

    setPreferredItems((prevPreferredItems) => {
      const updatedPreferredItems = prevPreferredItems.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
      localStorage.setItem('preferredItems', JSON.stringify(updatedPreferredItems));
      return updatedPreferredItems;
    });
    calculateTotalSubtotal();
  };

  const handleClick = (item: IItems, index: number) => {
    if (setCheckedStates) {
      setCheckedStates((prevState) => {
        const newState = [...prevState];
        newState[index] = !prevState[index];

        setPreferredItems((prevPreferredItems) => {
          let updatedPreferredItems;
          if (newState[index]) {
            updatedPreferredItems = [
              ...prevPreferredItems,
              { ...item, quantity: quantities[index] }
            ];
          } else {
            updatedPreferredItems = prevPreferredItems.filter((i) => i.name !== item.name);
          }

          localStorage.setItem('preferredItems', JSON.stringify(updatedPreferredItems));

          localStorage.setItem('checkedStates', JSON.stringify(newState));

          return updatedPreferredItems;
        });

        return newState;
      });
    }
  };

  useEffect(() => {
    const storedCheckedStates = localStorage.getItem('checkedStates');
    const storedPreferredItems = localStorage.getItem('preferredItems');

    if (storedCheckedStates) {
      if (setCheckedStates) {
        setCheckedStates(JSON.parse(storedCheckedStates));
      }
    }

    if (storedPreferredItems) {
      setPreferredItems(JSON.parse(storedPreferredItems));
    }
  }, []);

  return (
    <ScrollArea className=" p-4">
      <Table>
        <TableHeader className="hidden md:flex">
          <TableRow className="grid grid-cols-6 text-center text-[12px] font-medium pt-3 px-4 border-none w-full ">
            <TableHead className="col-span-3 flex items-center">Item</TableHead>
            <TableHead className="col-span-1 flex justify-center items-center">Quantity</TableHead>
            <TableHead className="col-span-1 flex justify-end items-center">SubTotal</TableHead>
            <TableHead>
              <span className="flex md:hidden col-span-1">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                onClick={() => {
                  handleClick(item, index);
                }}>
                <Checkbox checked={checkedStates ? checkedStates[index] : false} />
              </div>
              <div className="border max-h-48 mb-3 rounded-[8px] grow">
                <TableRow className="flex flex-col md:grid md:grid-cols-6 md:gap-4">
                  <TableCell className="font-medium col-span-3">
                    <div>
                      <div className="flex md:hidden">
                        <h3 className="font-medium text-[14px]">{item?.name}</h3>
                        <Trash2 className="w-4 h-4 flex md:hidden text-[#8b8d98]" />
                      </div>
                      <h3 className="font-medium text-[13px] hidden md:flex">{item?.name}</h3>
                      <div className="md:mt-2 font-normal text-[13px] md:text-[12px]">
                        <p>
                          <span className="text-[#616161]">Lot Number:</span>
                          <span>{item?.lotNumber}</span>
                        </p>
                        <p>
                          <span className="text-[#616161]">Warehouse:</span>
                          <span>{item?.wareHouse}</span>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <div className="flex justify-between text-sm w-full md:hidden px-5">
                    <span className="text-[#616161] font-medium">Quantity</span>
                    <Counter
                      className="w-[88px] h-[34px] px-3"
                      onValueChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                    />
                  </div>

                  <div className="flex justify-between my-3 text-sm w-full md:hidden px-5">
                    <span className="text-[#616161] font-medium">Subtotal</span>
                    <span className="font-semibold text-[14px]">
                      ${item?.unitPrice * quantities[index]}
                    </span>
                  </div>
                  <TableCell className="col-span-1 items-center -ml-5 hidden md:flex">
                    <Counter
                      className="w-[88px] h-[34px] px-3"
                      onValueChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                    />
                  </TableCell>
                  <TableCell className="col-span-1 flex items-center justify-center font-semibold text-[13px]">
                    <span className="hidden md:flex">${item?.unitPrice * quantities[index]}</span>
                  </TableCell>
                  <TableCell className="col-span-1 hidden md:flex items-center justify-end">
                    <Trash2 className="w-4 h-4 text-[#8b8d98]" />
                  </TableCell>
                </TableRow>
              </div>
            </div>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
