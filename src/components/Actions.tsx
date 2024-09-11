import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { EyeIcon } from 'lucide-react';

export function ActionsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <img src="/icons/actions.svg" alt="Actions" />
      </PopoverTrigger>
      <PopoverContent className="w-32 h-12 text-dark shadow-md absolute right-5">
        <div className="flex items-center justify-center -mt-1 gap-2">
          <EyeIcon className="h-[14px] w-[14px]" />
          <span>View</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
