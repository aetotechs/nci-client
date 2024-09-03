import React from 'react';
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
    <Table className="w-[600px] overflow-hidden">
      <TableHeader>
        <TableRow className="grid grid-cols-6 text-center pt-3 px-4 border-none w-full ">
          <TableHead className="col-span-3 flex items-center">Item</TableHead>
          <TableHead className="col-span-1   flex justify-center items-center">Quantity</TableHead>
          <TableHead className="col-span-1 flex justify-center items-center ">SubTotal</TableHead>
          <TableHead className="col-span-1"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center gap-2">
            <div>
              <Checkbox />
            </div>
            <div className="border mb-3 rounded-[8px]">
              <TableRow key={index} className="   w-[607px] grid grid-cols-6 h-[140px]">
                <TableCell className="font-medium col-span-3 px-10">
                  <div>
                    <h3 className="font-medium text-[17px]">{item.name}</h3>
                    <div className="mt-2">
                      <p className="font-normal text-[15px]">{`Lot Number:${item.lotNumber}`}</p>
                      <p>{`Ware House:${item.warehouse}`}</p>
                      <p>{`Quantity:${item.quantity}`}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="col-span-1 flex  items-center -ml-5 ">
                  <Counter />
                </TableCell>
                <TableCell className="col-span-1 flex items-center font-semibold text-base">
                  {item.subtotal}
                </TableCell>
                <TableCell className="col-span-1 flex items-center">
                  <Trash2 className="w-4 h-4" />
                </TableCell>
              </TableRow>
            </div>
          </div>
        ))}
      </TableBody>
    </Table>
  );
}
