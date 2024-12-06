import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/common/ui/sheet';

import { IActions } from '../../admin/other/Actions';
import { ArrowDown, EyeIcon } from 'lucide-react';
import { checkStatus } from '../../admin/tables/TransactionsTable';
import { extractDateOnly } from '@/components/admin/tables/CustomersTable';

export function ViewTransaction({ transaction }: IActions) {
  console.log(transaction);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center -mt-1 gap-2 cursor-pointer">
          <EyeIcon className="h-[14px] w-[14px]" />
          <span className="text-[13px] font-normal">View</span>
        </div>
      </SheetTrigger>
      <SheetContent className="w-[70vh] px-6">
        <SheetHeader>
          <SheetTitle className="mt-6 mb-2 font-semibold text-xl">View Transaction</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5">
          <div className="border bg-white flex justify-between gap-4 items-center rounded-[10px] px-2 h-[15vh]">
            <div className="flex gap-2">
              <div className="bg-primary w-[30px] h-[30px] flex justify-center rounded-full items-center my-3 ">
                <ArrowDown className="text-white h-4 w-4 " />
              </div>
              <div>
                <h3 className="text-sm font-medium">Payement for Order {transaction?.orderId}</h3>
                <p className="font-normal text-[12px]">{transaction?.paymentStatus}</p>
              </div>
            </div>
            <div className="font-bold text-[19px]">${transaction?.amount}</div>
          </div>
          <div className="flex flex-col gap-5 text-[15px]">
            <div className="flex justify-between">
              <span className="font-normal ">Transaction ID</span>
              <span className="font-medium ">{transaction?.transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal ">Status</span>
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] border-none items-center gap-1 ${checkStatus(transaction?.paymentStatus)}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                <span className="font-medium">{transaction?.paymentStatus}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Order ID</span>
              <span className="font-medium ">{transaction?.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Transaction Date</span>
              <span className="font-medium ">{extractDateOnly(transaction?.createdAt)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Amount ($)</span>
              <span className="font-medium ">{transaction?.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Payment Method</span>
              <span className="font-medium ">Card</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
