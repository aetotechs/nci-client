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
  status: string;
  amount: number;
  orderId: string;
}

interface ITransactionTableProps {
  transactions: ITransactions[];
  transactionId?: ITransactions;
}

export function checkStatus(status: string) {
  switch (status) {
    case 'Completed':
      return 'bg-yellow-100 text-primary';
    case 'Pending':
      return 'bg-blue-100 text-blue-700';
    case 'Failed':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function TransactionsTable({ transactions, transactionId }: ITransactionTableProps) {
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

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {transactions.map((transaction, index) => (
          <TableRow key={index} className="h-[70px] btransaction-b last:btransaction-b-0">
            <TableCell className="font-medium">#{truncate(transaction.transactionId)}</TableCell>
            <TableCell className="text-center">#{transaction.orderId}</TableCell>
            <TableCell className="text-center">{transaction.date}</TableCell>
            <TableCell className="text-center">{transaction.amount}</TableCell>

            <TableCell className="text-center">{transaction.status}</TableCell>
            <TableCell className="flex justify-center items-center">
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] boder-none items-center gap-1 ${checkStatus(transaction.status)}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                {transaction.status}
              </div>
            </TableCell>

            <TableCell className="relative">
              <ActionsPopover transactionId={transactionId} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
