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
  status: string
  orderItems: string[];
  customer: string;
  revenue: number;
}

interface IOrdersTable {
  orders: IOrders[];
}

function getStatusBadge(status: IOrders['status']) {
  switch (status) {
    case 'Shipped':
      return <span className="bg-blue-300 text-blue-400  py-1 px-2 rounded">Shipped</span>;
    case 'Processing':
      return <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded">Processing</span>;
    case 'Cancelled':
      return <span className="bg-red-100 text-red-800 py-1 px-2 rounded">Cancelled</span>;
    default:
      return null;
  }
}

export function AdminOrdersTable({ orders }: IOrdersTable) {
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">OrderId</TableHead>
          <TableHead className="text-dark font-medium">Order Date</TableHead>
          <TableHead className="text-dark font-medium">Status</TableHead>
          <TableHead className="text-dark font-medium">Ordered Items</TableHead>
          <TableHead className="text-dark font-medium">Customer</TableHead>
          <TableHead className="text-dark font-medium">Revenue ($)</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index} className="border-b h-10">
            <TableCell className="font-medium">#{order.id}</TableCell>
            <TableCell className="font-medium">{order.orderDate}</TableCell>
            <TableCell>{getStatusBadge(order.status)}</TableCell>
            <TableCell>{order.orderItems.join(', ')}</TableCell>
            <TableCell>{order.customer}</TableCell>
            <TableCell>{order.revenue}</TableCell>
            <TableCell>
              <ActionsPopover order={order} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
