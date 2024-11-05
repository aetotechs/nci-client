import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/common/ui/table';
import { Checkbox } from '@/components/common/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { ScrollArea } from '@/components/common/ui/scroll-area';
import Counter from './Counter';

export function ItemsTable({ cart, selectCartItem, updateProductQuantity, removeProductFromCart }: any) {
  return (
    <ScrollArea className="p-4">
      <Table>
        <TableHeader className="hidden md:flex">
          <TableRow className="grid grid-cols-6 text-center text-[12px] font-medium pt-3 px-4 border-none w-full ">
            <TableHead className="col-span-3 flex items-center px-2">Item</TableHead>
            <TableHead className="col-span-1 flex justify-center items-center">Quantity</TableHead>
            <TableHead className="col-span-1 flex justify-center items-center">SubTotal</TableHead>
            <TableHead>
              <span className="flex md:hidden col-span-1">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item: any, index: any) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                onCheckedChange={() => selectCartItem(item?.product?.itemId, !item?.selected)}
                checked={item.selected}
              />
              <div className="border lg:h-[100px] h-44 py-2 mb-3 rounded-[8px] grow">
                <TableRow className="flex flex-col md:grid md:grid-cols-6 md:gap-4">
                  <TableCell className="font-medium col-span-3">
                    <div>
                      <div className="flex items-center justify-between md:hidden">
                        <h3 className="font-medium text-[14px]">{item?.product?.name}</h3>
                        <Trash2
                          className="w-4 h-4 flex md:hidden text-[#8b8d98]"
                          onClick={() => removeProductFromCart(item?.product?.itemId)}
                        />
                      </div>
                      <h3 className="font-medium text-[13px] hidden md:flex">{item?.product?.name}</h3>
                      <div className="md:mt-2 font-normal text-[13px] md:text-[12px]">
                        <p>
                          <span className="text-[#616161]">Lot Number:</span>
                          <span>{item?.product?.lotNumber}</span>
                        </p>
                        <p>
                          <span className="text-[#616161]">Warehouse:</span>
                          <span>{item?.product?.wareHouse}</span>
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="col-span-1 items-center -ml-5 hidden md:flex">
                    <Counter
                      quantity={item?.quantity}
                      onValueChange={(newQuantity) => updateProductQuantity(item?.product?.itemId, newQuantity)}
                    />
                  </TableCell>
                  <TableCell className="col-span-1 flex items-center justify-center font-semibold text-[13px]">
                    <span className="hidden md:flex">${item?.product?.unitPrice * item?.quantity}</span>
                  </TableCell>
                  <TableCell className="col-span-1 hidden md:flex items-center justify-end">
                    <Trash2 className="w-4 h-4 text-[#8b8d98]" onClick={() => removeProductFromCart(item?.product?.itemId)}/>
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