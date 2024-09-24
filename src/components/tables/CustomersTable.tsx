import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';

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
  customers: ICustomers[];
  customerId?: ICustomers;
  setShowViewCustomer: (show: boolean) => void;

  
}

export function CustomersTable({ customers, customerId ,setShowViewCustomer}: ICustomerTableProps) {
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">Name</TableHead>
          <TableHead className="text-dark font-medium text-center">Contact</TableHead>
          <TableHead className="text-dark font-medium text-center">Orders</TableHead>
          <TableHead className="text-dark font-medium text-center">Date</TableHead>

          <TableHead className="text-dark font-medium text-center">Revenue ($)</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {customers.map((customer, index) => (
          <TableRow key={index} className="h-[70px] bcustomer-b last:bcustomer-b-0">
            <TableCell className="font-medium">{customer.name}</TableCell>
            <TableCell className="text-center">{customer.contact}</TableCell>
            <TableCell className="text-center">{customer.orders}</TableCell>
            <TableCell className="text-center">{customer.date}</TableCell>

            <TableCell className="text-center">{customer.revenue}</TableCell>

            <TableCell className="relative">
              <ActionsPopover
                customerId={customerId}
                setShowViewCustomer={setShowViewCustomer}
                
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
