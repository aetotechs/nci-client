import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import NavItems from '@/components/NavItems';
import { IStatus } from '@/App';
import { AccountPopover } from './Account';
import { Link } from 'react-router-dom';
import { PopoverContent } from '@radix-ui/react-popover';
import { Popover, PopoverTrigger } from './ui/popover';
import { useState } from 'react';

export function MobileNav({ status }: IStatus) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div onClick={handleToggle}>
          {isOpen ? <X className="text-icon text-2xl" /> : <Menu className="text-icon text-2xl" />}
        </div>
      </PopoverTrigger>
      <PopoverContent className="z-50 mt-10 w-[100vw] bg-white py-2 overflow-scroll">
        <NavItems />
        <div className="flex justify-center mt-5 md:mt-5 px-4">
          {status ? (
            <AccountPopover />
          ) : (
            <Link to="/login" className="w-full ">
              <Button className="h-[45px] w-full md:w-[100%] rounded-xl">Login</Button>
            </Link>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
