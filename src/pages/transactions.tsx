import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';

import { ListingFilter } from '@/components/ListingFilter';

import { TransactionsTable } from '@/components/tables/TransactionsTable';
import { TransactionFilter } from '@/components/TransactionFilter';

import { Badge } from '@/components/ui/badge';

export const transactions = [
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Completed'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Pending'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Failed'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Completed'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Pending'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Completed'
  },
  {
    transactionId: '7521d76489711f51b4818d8993797708',
    orderId: '7904',
    date: 'Aug,31 2024',
    amount: 100,
    status: 'Completed'
  }
];
function Transactions() {
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6 ">
        <AdminHeader />

        <div className="p-5 mt-14 flex justify-between">
          <div className="flex gap-3 items-center">
            <h3 className="font-semibold text-2xl">Transactions</h3>
            <Badge
              variant="outline"
              className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary">
              {transactions.length}
            </Badge>
          </div>
          <div className="flex justify-between mt-5">
            <TransactionFilter />
          </div>
        </div>

        <div className="border my-5 rounded-t-[8px] mx-5  overflow-hidden">
          <TransactionsTable transactions={transactions} />
        </div>
        <div>
          <span className="font-normal text-[12px] mx-5">
            Showing: {transactions.length} of {transactions.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
