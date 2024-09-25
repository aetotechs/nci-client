import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';
import { useLocation } from 'react-router-dom';

import { Eye } from 'lucide-react';

export interface IOrders {
  id: string;
  orderDate: string;
  status: string;
  orderItems?: string[];
  item?: string;
  totalPrice?: number;
  customer?: string;
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
  const location = useLocation();
  const { pathname } = location;
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">OrderId</TableHead>
          <TableHead className="text-dark font-medium">Order Date</TableHead>
          <TableHead className="text-dark font-medium">Status</TableHead>
          <TableHead className="text-dark font-medium">{pathname==='/analytics'?'Item':'Ordered Items'}</TableHead>
          {pathname === '/analytics' && <TableHead></TableHead>}
          {pathname === '/orders' && (
            <>
              <TableHead className="text-dark font-medium">Customer</TableHead>
              <TableHead className="text-dark font-medium">Revenue ($)</TableHead>
              <TableHead></TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index} className="border-b h-10">
            <TableCell className="font-medium">#{order.id}</TableCell>
            <TableCell className="font-normal text-[15px]">{order.orderDate}</TableCell>
            <TableCell>{getStatusBadge(order.status)}</TableCell>
            {pathname == '/orders' ? <TableCell>{order?.orderItems?.join(', ')}</TableCell>:<TableCell>{order?.item}</TableCell>}
            {pathname === '/analytics' && (
              <TableCell>
                <Eye className='h-4 w-4' />
              </TableCell>
            )}

            {pathname === '/customers' && (
              <TableCell className="flex flex-col gap-1">
                <span className="font-medium text-[15px]">${order.totalPrice}</span>
                <span className="text-sm">{order?.orderItems?.join(', ')}</span>
              </TableCell>
            )}

            {pathname === '/orders' && (
              <>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.revenue}</TableCell>
                <TableCell>
                  <ActionsPopover order={order} />
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
