import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';
import { ActionsPopover } from '../other/Actions';
import { truncate } from '@/utils/commons/Truncate';

export interface ITransactions {
  transactionId: string;
  date: string;
  paymentStatus: string;
  amount: number;
  orderId: string;
  userDetails?: {
    firstName: string;
    lastName: string;
  };
  orderDetails?: {
    product: {
      name: string;
    };
  }[];
}

interface ITransactionTableProps {
  transactions: ITransactions[];
  transaction?: ITransactions;
}

export function checkStatus(status: string) {
  switch (status) {
    case 'COMPLETED':
      return 'bg-yellow-100 text-primary';
    case 'PENDING':
      return 'bg-blue-100 text-blue-700';
    case 'FAILED':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function TransactionsTable({ transactions, transaction }: ITransactionTableProps) {
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">OrderId</TableHead>
          <TableHead className="text-dark font-medium">Order Date</TableHead>
          <TableHead className="text-dark font-medium text-center">Status</TableHead>
          <TableHead className="text-dark font-medium">Ordered Items</TableHead>
          <TableHead className="text-dark font-medium text-center">Customer</TableHead>
          <TableHead className="text-dark font-medium text-center">Revenue ($)</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 py-3 rounded-3xl ">
        {transactions.map((transaction, index) => (
          <TableRow key={index} className="h-[50px] border-b last:border-b-0">
            <TableCell className="">{truncate(transaction.orderId)}</TableCell>

            <TableCell className="text-center">{transaction.date}</TableCell>

            <TableCell className="flex justify-center items-center">
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] boder-none items-center gap-1 ${checkStatus(transaction.paymentStatus)}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                {transaction.paymentStatus}
              </div>
            </TableCell>
            <TableCell className="max-w-[160px]">
              {transaction.orderDetails
                ?.map((detail) => detail.product?.name)
                .filter(Boolean)
                .join(', ') || 'No products'}{' '}
            </TableCell>

            <TableCell className="flex gap-1 justify-center">
              <span>{transaction.userDetails?.firstName}</span>

              {transaction.userDetails?.lastName}
            </TableCell>
            <TableCell className="text-center">{transaction.amount}</TableCell>

            <TableCell className="relative">
              <ActionsPopover transaction={transaction} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
