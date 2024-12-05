import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';
import { ActionsPopover } from '../other/Actions';
import { extractDateOnly } from './CustomersTable';

export interface IOrder {
  orderId: string;
  quantity: number;
  total: number;
  status: string;
  date: string;
}

interface IOrderTableProps {
  orders: IOrder[];
}

export function checkStatus(status: string) {
  switch (status) {
    case 'Processing':
      return 'bg-[#ffa5001e] text-[#ffa500]';
    case 'Shipped':
      return 'bg-[#007bff1e] text-[#007bff]';
    case 'Delivered':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function OrdersTable({ orders }: IOrderTableProps) {
  return (
    <Table>
      <TableHeader className=" h-[40px] ">
        <TableRow className="">
          <TableHead className="w-[100px]">OrderId</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-center">Total</TableHead>
          <TableHead>
            <span className="flex md:hidden"></span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-lg md:overflow-hidden">
        {orders.map((order, index) => (
          <TableRow
            key={index}
            className={`h-[40px] border-b border-primary/15 last:border-b-0 
              ${index === 0 ? 'rounded-e-full  overflow-hidden' : ''} ${index === orders.length - 1 ? 'rounded-b-lg  overflow-hidden' : ''}`}
          >
            <TableCell className="font-medium py-2">#{order.orderId}</TableCell>
            <TableCell className="text-center p-2  min-w-[100px] ">
              {extractDateOnly(order.date)}
            </TableCell>
            <TableCell className="flex justify-center items-center  p-2  h-[56px] md:h-9">
              <div
                className={`flex  w-max px-2  text-[13px] rounded-[5px]  items-center gap-1 ${checkStatus(order.status)}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-center p-2">{order.quantity}</TableCell>
            <TableCell className="text-center p-2">${order.total}</TableCell>
            <TableCell className="relative p-2">
              <ActionsPopover />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
