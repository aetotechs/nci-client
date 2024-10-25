import { Popover, PopoverContent, PopoverTrigger } from '@/components/common/ui/popover';

import { Button } from '../../common/ui/button';
import { TransactionFilterForm } from '../../admin/forms/TransactionFilterForm';

export function TransactionFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="text-primary border-primary w-[111px] gap-2">
          <span>
            <img src="/icons/filter.png" />
          </span>
          Filters
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <TransactionFilterForm />
      </PopoverContent>
    </Popover>
  );
}
