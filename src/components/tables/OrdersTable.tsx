import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ActionsPopover } from '../Actions';
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

function checkStatus(status: string) {
  switch (status) {
    case 'Processing':
      return 'bg-yellow-100 text-primary';
    case 'Shipped':
      return 'bg-blue-100 text-blue-700';
    case 'Delivered':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function OrdersTable({ orders }: IOrderTableProps) {
  return (
    <Table>
      <TableHeader className="">
        <TableRow className="">
          <TableHead className="w-[100px]">OrderId</TableHead>
          <TableHead className="text-center">Date</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Quantity</TableHead>
          <TableHead className="text-center">Total</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {orders.map((order, index) => (
          <TableRow key={index} className="h-[70px] border-b last:border-b-0">
            <TableCell className="font-medium">#{order.orderId}</TableCell>
            <TableCell className="text-center">{order.date}</TableCell>
            <TableCell className="flex justify-center items-center">
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] border items-center gap-1 ${checkStatus(order.status)}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-center">{order.quantity}</TableCell>
            <TableCell className="text-center">${order.total}</TableCell>
            <TableCell className="relative">
              <ActionsPopover />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
