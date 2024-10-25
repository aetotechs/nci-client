import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/common/ui/sheet';

import { EyeIcon } from 'lucide-react';

import { IActions } from './Actions';
import { ViewOriginForm } from '../forms/ViewOriginForm';

export function ViewOrigin({ origin }: IActions) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-center -mt-1 gap-2 cursor-pointer">
          <EyeIcon className="h-[14px] w-[14px]" />
          <span className="text-[13px] font-normal">View</span>
        </div>
      </SheetTrigger>
      <SheetContent className=" px-6">
        <SheetHeader>
          <SheetTitle className="mt-6 mb-2 font-semibold text-base">View Origin</SheetTitle>
        </SheetHeader>
        <div>
          <ViewOriginForm origin={origin} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
