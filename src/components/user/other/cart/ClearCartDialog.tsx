import { Button } from '@/components/common/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/ui/dialog';
import { useCart } from '@/utils/hooks/CartHook';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

export function DeleteDialog() {
  const { clearCartItems } = useCart();
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClearCart = () => {
    clearCartItems();
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex gap-2 bg-red-500 border-none rounded-[6px] md:rounded-[10px] h-8 md:h-10 text-white px-3"
          variant="outline"
        >
          <span>
            <Trash2 className="h-3 w-3 md:w-4 md:h-4" />
          </span>
          <span className="font-normal text-sm"> Clear Cart</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-semibold text-sm">
            Are you sure you want to clear this cart?
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1 border border-red-400 bg-destructive text-red-500 p-2 rounded-[5px]">
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/warning.svg" width={12} height={10} alt="Warning" />
            </span>
            <span className="font-medium">Warning</span>
          </div>
          <span className="text-[12px] font-normal">
            By clearing this cart, all its items will also be permanently deleted.
          </span>
        </div>

        <DialogFooter>
          <Button
            type="button"
            onClick={handleClearCart}
            variant="outline"
            className="text-white bg-red-400"
          >
            Clear
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}