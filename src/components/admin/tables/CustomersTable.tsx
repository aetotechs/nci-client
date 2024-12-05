import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';

import { ActionsPopover } from '../other/Actions';
import { User, UserWithOrders } from '@/utils/services/FetchUsers';

export interface ICustomers {
  customerId?: string;
  name: string;
  contact: string;
  email: string;
  orders: number;
  revenue: number;
  date: string;
}

export interface ICustomerTableProps {
  customers: UserWithOrders[];
  customerId?: ICustomers;
  setShowViewCustomer: (show: boolean) => void;
}

export function extractDateOnly(dateString: string | undefined): string {
  if (!dateString) {
    return 'N/A';
  }
  return dateString.split('T')[0];
}
export function CustomersTable({
  customers,
  customerId,
  setShowViewCustomer
}: ICustomerTableProps) {
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">Name</TableHead>
          <TableHead className="text-dark font-medium text-center">Contact</TableHead>
          <TableHead className="text-dark font-medium text-center">Orders</TableHead>
          <TableHead className="text-dark font-medium text-center">Date</TableHead>

          <TableHead className="text-dark font-medium text-center">Revenue ($)</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {customers.map((customer, index) => (
          <TableRow key={index} className="h-[50px] border-b last:bcustomer-b-0">
            <TableCell className="font-medium">
              {customer.firstName}
              {customer.lastName}
            </TableCell>
            <TableCell className="text-center">{customer.workPhone}</TableCell>
            <TableCell className="text-center">{customer.orders?.length}</TableCell>
            <TableCell className="text-center">{extractDateOnly(customer.createdAt)}</TableCell>

            <TableCell className="text-center">
              {customer.orders?.reduce((total, order) => total + order.totalAmount, 0)}
            </TableCell>
            <TableCell className="relative">
              <ActionsPopover customerId={customerId} setShowViewCustomer={setShowViewCustomer} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
