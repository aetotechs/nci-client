import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { HomeIcon, Settings } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export interface AdminSideBarDesktopProps {
  isCollapsed?: boolean;
  toggleCollapse?: () => void;
}

function AdminSideBarDesktop({ isCollapsed }: AdminSideBarDesktopProps) {
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
    <aside
      className={`flex flex-col gap-3 fixed transition-all  z-50 duration-300  ${isCollapsed ? 'w-16' : 'w-[14vw]'}`}
    >
      <div
        className={`border-b border-primary/30 py-2 mb-4 flex relative items-center  ${isCollapsed ? 'w-10vw overflow-hidden' : 'w-[20vw]'}`}
      >
        <Link to="/admin">
          <div className="w-[10vw] py-2 h-[40px]">
            <img src="/logos/logo.png" alt="coffee logo" width="200" height={38} />
          </div>
        </Link>
      </div>

      <div className={`flex flex-col gap-4 px-5   ${isCollapsed && 'w-[5vw] '}`}>
        <Link to="/admin">
          <div
            className={`flex items-center gap-2 cursor-pointer ${isActive('/admin') ? 'text-primary' : ''}`}
          >
            <HomeIcon className="h-4 w-4" />
            {!isCollapsed && <span>Dashboard</span>}
          </div>
        </Link>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 ">
                <div className="w-5">
                  <img src="/icons/catalog.svg" alt="Catalog" />
                </div>
                {!isCollapsed && <span>Catalogue</span>}
              </div>
            </AccordionTrigger>
            {!isCollapsed && (
              <AccordionContent className="max-w-36">
                <div className="flex flex-col gap-2 px-3">
                  <Link
                    to="/coffee-listings"
                    className={isActive('/coffee-listings') ? 'text-primary' : ''}
                  >
                    Coffee Listings
                  </Link>
                  <Link to="/categories" className={isActive('/categories') ? 'text-primary' : ''}>
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
            )}
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <div className="w-5">
                  <img src="/icons/sales.svg" alt="Sales" />
                </div>{' '}
                {!isCollapsed && <span>Sales</span>}
              </div>
            </AccordionTrigger>
            {!isCollapsed && (
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
            )}
          </AccordionItem>
        </Accordion>

        <Link to="/customers">
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              isActive('/customers') ? 'text-primary' : ''
            }`}
          >
            <img src="/icons/customer.svg" alt="Customers" />
            {!isCollapsed && <span>Customers</span>}
          </div>
        </Link>

        <Link to="/analytics">
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              isActive('/analytics') ? 'text-primary' : ''
            }`}
          >
            <img src="/icons/analytics.svg" alt="Analytics" />
            {!isCollapsed && <span>Analytics</span>}
          </div>
        </Link>

        <Link to="/settings">
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              isActive('/settings') ? 'text-primary' : ''
            }`}
          >
            <Settings className="h-4 w-4" />
            {!isCollapsed && <span>Settings</span>}
          </div>
        </Link>

        <div
          onClick={HandleClick}
          className={`flex items-center gap-2 cursor-pointer ${
            isActive('/logout') ? 'text-primary' : ''
          }`}
        >
          <img src="/icons/logout.svg" alt="Logout" />
          {!isCollapsed && <span>Logout</span>}
        </div>
      </div>
    </aside>
  );
}

export default AdminSideBarDesktop;
