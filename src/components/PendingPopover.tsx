import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function PendingPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span>
          <img src="/icons/pending.svg" alt="Pending" />
        </span>
      </PopoverTrigger>
      <PopoverContent className="text-white px-2 py-1 bg-blue-600 font-normal text-[12px] md:w-[402px] md:h-[68px]">
        Pending order quantities will be deducted from inventory once shipped. If an order is
        canceled, the quantity is returned to inventory and made available for sale.
      </PopoverContent>
    </Popover>
  );
}
