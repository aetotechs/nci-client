import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';

export interface IOrders {
  id: string;
  orderDate: string;
  status: string;
  orderItems: string[];
  customer: string;

  revenue: number;
}

interface IOrfersTable {
  orders: IOrders[];
  order?: IOrders;
}

export function AdminOrdersTable({ orders, order }: IOrfersTable) {
  return (
    <Table>
      <TableHeader className=" h-9 bg-primary/10 ">
        <TableRow>
          <TableHead className="text-dark font-medium ">OrderId</TableHead>
          <TableHead className="text-dark font-medium">Order Date</TableHead>
          <TableHead className="text-dark font-medium ">Status</TableHead>
          <TableHead className="text-dark font-medium ">Ordered Items</TableHead>
          <TableHead className="text-dark font-medium ">Customer</TableHead>
          <TableHead className="text-dark font-medium ">Revenue ($)</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index} className="border-b h-10 ">
            <TableCell className="font-medium ">{order.id}</TableCell>
            <TableCell className="font-medium">{order.orderDate}</TableCell>
            <TableCell className="flex flex-col gap-2 text-[15px]">{order.status}</TableCell>
            <TableCell className="">{order.orderItems.map((item, index) => item)}</TableCell>
            <TableCell className="">{order.customer}</TableCell>
            <TableCell className="">{order.revenue}</TableCell>
            <TableCell>
              <ActionsPopover order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
