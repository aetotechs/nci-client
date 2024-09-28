import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { IActions } from './Actions';
import { ArrowDown, EyeIcon } from 'lucide-react';
import { checkStatus } from './tables/TransactionsTable';

export function ViewTransaction({ transactionId }: IActions) {
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
              <div className="rounded-full bg-primary h-9 w-9 flex justify-center items-center ">
                <ArrowDown className="text-white h-5 w-5 " />
              </div>
              <div>
                <h3 className="text-base font-medium">Payement for Order #7508</h3>
                <p className="font-normal text-[12px]">Completed</p>
              </div>
            </div>
            <div className="font-bold text-[19px]">$540</div>
          </div>
          <div className="flex flex-col gap-5 text-[15px]">
            <div className="flex justify-between">
              <span className="font-normal ">Transaction ID</span>
              <span className="font-medium ">Transaction ID</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal ">Status</span>
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] border-none items-center gap-1 ${checkStatus('Completed')}`}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                <span className="font-medium">Completed</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Order ID</span>
              <span className="font-medium ">Transaction ID</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Transaction Date</span>
              <span className="font-medium ">Transaction ID</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Amount ($)</span>
              <span className="font-medium ">Transaction ID</span>
            </div>
            <div className="flex justify-between">
              <span className="font-normal">Payment Method</span>
              <span className="font-medium ">Transaction ID</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
