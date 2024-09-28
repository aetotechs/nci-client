import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HomeIcon, Menu, Settings } from 'lucide-react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

export function MobileSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const HandleClick = () => {
    setTimeout(() => {
      localStorage.clear();
      navigate('/');

      window.location.reload();
    }, 1000);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Menu className="text-icon text-2xl" />
      </PopoverTrigger>
      <PopoverContent className="w-[100vw] h-max z-30 mt-5 ">
        <div className="flex flex-col gap-2 md:flex-row md:justify-around  mb-10">
          <div className={`flex flex-col gap-4 px-5     'w-[5vw] '}`}>
            <Link to="/admin">
              <div
                className={`flex items-center gap-2 cursor-pointer ${isActive('/admin') ? 'text-primary' : ''}`}
              >
                <HomeIcon className="h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </Link>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2 ">
                    <div className="w-5">
                      <img src="/icons/catalog.svg" alt="Catalog" />
                    </div>
                    <span>Catalogue</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="max-w-36">
                  <div className="flex flex-col gap-2 px-3">
                    <Link
                      to="/coffee-listings"
                      className={isActive('/coffee-listings') ? 'text-primary' : ''}
                    >
                      Coffee Listings
                    </Link>
                    <Link
                      to="/categories"
                      className={isActive('/categories') ? 'text-primary' : ''}
                    >
                      Categories
                    </Link>
                    <Link
                      to="/admin-origins"
                      className={isActive('/admin-origins') ? 'text-primary' : ''}
                    >
                      Origins
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-2">
                    <div className="w-5">
                      <img src="/icons/sales.svg" alt="Sales" />
                    </div>{' '}
                    <span>Sales</span>{' '}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="max-w-36">
                  <div className="flex flex-col gap-2 px-3">
                    <Link to="/orders" className={isActive('/orders') ? 'text-primary' : ''}>
                      Orders
                    </Link>
                    <Link
                      to="/transactions"
                      className={isActive('/transactions') ? 'text-primary' : ''}
                    >
                      Transactions
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Link to="/customers">
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  isActive('/customers') ? 'text-primary' : ''
                }`}
              >
                <img src="/icons/customer.svg" alt="Customers" />
                <span>Customers</span>
              </div>
            </Link>

            <Link to="/analytics">
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  isActive('/analytics') ? 'text-primary' : ''
                }`}
              >
                <img src="/icons/analytics.svg" alt="Analytics" />
                <span>Analytics</span>
              </div>
            </Link>

            <Link to="/settings">
              <div
                className={`flex items-center gap-2 cursor-pointer ${
                  isActive('/settings') ? 'text-primary' : ''
                }`}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </div>
            </Link>

            <div
              onClick={HandleClick}
              className={`flex items-center gap-2 cursor-pointer ${
                isActive('/logout') ? 'text-primary' : ''
              }`}
            >
              <img src="/icons/logout.svg" alt="Logout" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
