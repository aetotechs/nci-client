import { useState } from 'react';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import Search from '@/components/Search';
import { OriginsTable } from '@/components/tables/OriginsTable';
import { RegionsTable } from '@/components/tables/RegionsTable';
import { AddOrigin } from '@/components/AddOrigin';
import { AddRegion } from '@/components/AddRegion';
import AdminAccount from '@/components/AdminAccount';
import Preferences from '@/components/Preferences';
import Users from '@/components/Users';
import AdminMobileNav from '@/components/AdminMobileNav';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const origins = [
  {
    id: '1',
    name: 'Uganda',
    numberOfRegions: 4,
    regions: ['Mount Elgon', 'Rwenzori', 'Buduuda']
  }
];

const regions = [
  {
    id: '1',
    name: 'Mount Elgon',
    origin: 'Uganda',
    numberOfCoffeeListings: 20
  },
  {
    id: '2',
    name: 'Rwenzori Mountains',
    origin: 'Uganda',
    numberOfCoffeeListings: 10
  },
  {
    id: '3',
    name: 'West Nile',
    origin: 'Uganda',
    numberOfCoffeeListings: 3
  }
];

function Settings() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const [activeTab, setActiveTab] = useState<'AdminAccount' | 'users' | 'preferences'>(
    'AdminAccount'
  );

  return (
    <div className={`flex w-[100vw]  relative `}>
      <div
        className={` w-[15vw] hidden md:flex bg-white h-screen border-r border-primary/30 sticky top-0  transition-all duration-300 ${isCollapsed && 'w-[5vw] overflow-x-hidden'}`}
      >
        <AdminSideBarDesktop isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md  z-50 fixed  rounded-sm translate-x-[14vw] ${isCollapsed && 'translate-x-[4vw]'}`}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[86vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        <div
          className={`py-5 px-10 mt-20 md:mt-0 w-[100vw]   ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'}`}
        >
          <div className="flex justify-between">
            <h3 className="font-semibold text-xl lg:text-[23px]">Settings</h3>
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="flex gap-3 items-center">
              <h4
                className={`cursor-pointer ${activeTab === 'AdminAccount' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('AdminAccount')}
              >
                Account
              </h4>
              <h4
                className={`cursor-pointer ${activeTab === 'users' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                Users
              </h4>
              <h4
                className={`cursor-pointer ${activeTab === 'preferences' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('preferences')}
              >
                Notification Preferences
              </h4>
            </div>
          </div>

          <div className="mt-6">
            {activeTab === 'AdminAccount' && <AdminAccount />}

            {activeTab === 'preferences' && <Preferences />}

            {activeTab === 'users' && <Users />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
