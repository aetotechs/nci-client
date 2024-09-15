import { Home, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

function AdminSideBarDesktop() {
  return (
    <aside className="flex flex-col gap-3 ">
      <div className='border-b border-primary py-2 mb-4'>
        <Link to="/">
          <div className="w-[160px] h-12 md:w-[163px] md:h-10 px-3 ">
            <img src="/logos/logo.png" alt="coffee logo" width="200" height={38} />
          </div>
        </Link>
      </div>
      <div className='flex flex-col gap-2 px-3 '>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/home.svg" alt="Home" />
        </span>
        Dashboard
      </div>
      <div className="flex items-center gap-2">
        <span>
         <img src="/icons/catalog.svg" alt="Catalog" />
        </span>
        Catalogue
      </div>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/sales.svg" alt="Sales" />
        </span>
        Sales
      </div>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/customer.svg" alt="Customers" />
        </span>
        Customers
      </div>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/analytics.svg" alt="Analytics" />
        </span>
        Analytics
      </div>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/settings.svg" alt="Settings" />
        </span>
        Settings
      </div>
      <div className="flex items-center gap-2">
        <span>
        <img src="/icons/logout.svg" alt="Logout" />
        </span>
        Logout
      </div>
      </div>
    </aside>
  );
}

export default AdminSideBarDesktop;
