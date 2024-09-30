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

export interface IItems {
  name: string;
  subtotal: string;

  bags: string;
  lotNumber: string;
  warehouse: string;
  quantity: number;
}
interface ITableProps {
  items: IItems[];
}
export function ItemsTable({ items }: ITableProps) {
  return (
    <Table className=" ">
      <TableHeader>
        <TableRow className="grid grid-cols-6 text-center text-[12px] font-medium pt-3 px-4 border-none w-full ">
          <TableHead className="col-span-3 flex items-center">Item</TableHead>
          <TableHead className="col-span-1   flex justify-center items-center">Quantity</TableHead>
          <TableHead className="col-span-1 flex justify-end items-center ">SubTotal</TableHead>
          <TableHead>
            <span className="flex md:hidden col-span-1">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <div key={index} className="flex  items-center gap-2 ">
            <div>
              <Checkbox />
            </div>
            <div className="border mb-3 rounded-[8px] grow">
              <TableRow key={index} className="    grid grid-cols-6 gap-4 ">
                <TableCell className="font-medium col-span-3 ">
                  <div>
                    <h3 className="font-medium text-[13px]">{item.name}</h3>
                    <div className="mt-2 font-normal text-[12px]">
                      <p className=""><span className='text-[#616161]'>Lot Number:</span><span>{item.lotNumber}</span></p>
                      <p className=""><span className='text-[#616161]'>Warehouse:</span><span>{item.warehouse}</span></p>
                      <p className=""><span className='text-[#616161]'>Quantity:</span><span>{item.quantity}</span></p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="col-span-1 flex  items-center -ml-5 ">
                  <Counter className="w-[78px] h-[24px]" />
                </TableCell>
                <TableCell className="col-span-1 flex items-center font-semibold text-[13px]">
                  {item.subtotal}
                </TableCell>
                <TableCell className="col-span-1 flex items-center justify-end">
                  <Trash2 className="w-4 h-4 text-[#8b8d98]" />
                </TableCell>
              </TableRow>
            </div>
          </div>
        ))}
      </TableBody>
    </Table>
  );
}
