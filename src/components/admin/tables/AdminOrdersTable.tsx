import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';

import { ActionsPopover } from '../other/Actions';
import { useLocation } from 'react-router-dom';

import { Eye } from 'lucide-react';

export interface IOrders {
  orderId: string;
  createdAt: string;
  orderStatus: string;
  orderItems?: string[];
  item?: string;
  totalPrice?: number;
  customer?: string;
  totalAmount: number;
}

interface IOrdersTable {
  orders: IOrders[];
}

function getStatusBadge(orderStatus: IOrders['orderStatus']) {
  switch (orderStatus) {
    case 'SHIPPED':
      return <span className="bg-blue-300 text-blue-400  py-1 px-2 rounded">Shipped</span>;
    case 'PROCESSING':
      return <span className="bg-yellow-100 text-yellow-800 py-1 px-2 rounded">Processing</span>;
    case 'CANCELLED':
      return <span className="bg-red-100 text-red-800 py-1 px-2 rounded">Cancelled</span>;
    default:
      return <span className="bg-red-100 text-red-800 py-1 px-2 rounded">Pending</span>;;
  }
}

export function AdminOrdersTable({ orders }: IOrdersTable) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark  ">
        <TableRow>
          <TableHead className="text-dark font-medium">OrderId</TableHead>
          <TableHead className="text-dark font-medium">Order Date</TableHead>
          <TableHead className="text-dark font-medium">Status</TableHead>
          <TableHead className="text-dark font-medium ">
            {pathname === '/analytics' ? 'Item' : 'Ordered Items'}
          </TableHead>
          {pathname === '/analytics' ? <TableHead></TableHead> : ''}
          {pathname === '/orders' ? (
            <>
              <TableHead className="text-dark font-medium">Customer</TableHead>
              <TableHead className="text-dark font-medium">Revenue ($)</TableHead>
              <TableHead>
                <span className="flex md:hidden">Actions</span>
              </TableHead>
            </>
          ) : (
            ''
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order, index) => (
          <TableRow key={index} className="border-b h-10">
            <TableCell className="font-medium">{order?.orderId}</TableCell>
            <TableCell className="font-normal text-[15px]">{order.createdAt}</TableCell>
            <TableCell>{getStatusBadge(order.orderStatus)}</TableCell>
            {pathname == '/orders' && <TableCell>{order?.orderItems?.join(', ')}</TableCell>}
            {pathname == '/analytics ' && <TableCell>{order?.item}</TableCell>}
            {pathname === '/analytics' && (
              <TableCell>
                <Eye className="h-4 w-4" />
              </TableCell>
            )}

            {pathname === '/customers' && (
              <TableCell className="flex flex-col gap-1 ">
                <span className="font-medium text-[15px]">${order.totalPrice}</span>
                <span className="text-sm">{order?.orderItems?.join(', ')}</span>
              </TableCell>
            )}

            {pathname === '/orders' && (
              <>
                <TableCell>{order.customer}</TableCell>
                <TableCell className='text-center'>{order.totalAmount}</TableCell>
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
