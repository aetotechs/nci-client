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
      <TableHeader className="hidden md:flex">
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
            <div className="border  max-h-48 mb-3 rounded-[8px] grow">
              <TableRow key={index} className=" flex flex-col   md:grid md:grid-cols-6 md:gap-4 ">
                <TableCell className="font-medium  col-span-3 ">
                  <div>
                    <div className="flex md:hidden">
                      <h3 className="font-medium text-[14px]">{item.name}</h3>

                      <Trash2 className="w-4 h-4 flex md:hidden text-[#8b8d98]" />
                    </div>
                    <h3 className="font-medium text-[13px] hidden md:flex">{item.name}</h3>

                    <div className="md:mt-2 font-normal text-[13px] md:text-[12px]">
                      <p className="">
                        <span className="text-[#616161]">Lot Number:</span>
                        <span>{item.lotNumber}</span>
                      </p>
                      <p className="">
                        <span className="text-[#616161]">Warehouse:</span>
                        <span>{item.warehouse}</span>
                      </p>
                    </div>
                  </div>
                </TableCell>
                <div className="flex justify-between text-sm  w-full md:hidden px-5">
                  <span className="text-[#616161] font-medium">Quantity</span>
                  <Counter className="w-[88px] h-[34px] px-3" />
                </div>

                <div className="flex justify-between my-3 text-sm  w-full md:hidden px-5">
                  <span className="text-[#616161] font-medium">Subtotal</span>
                  <span className="font-semibold text-[14px]"> {item.subtotal}</span>
                </div>
                <TableCell className="col-span-1   items-center -ml-5 hidden md:flex ">
                  <Counter className="w-[88px] h-[34px] px-3" />
                </TableCell>
                <TableCell className="col-span-1 flex items-center font-semibold text-[13px]">
                  <span className="hidden md:flex"> {item.subtotal}</span>
                  <span> </span>
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
  );
}
