import { useState } from 'react';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import Search from '@/components/user/other/Search';
import { OriginsTable } from '@/components/admin/tables/OriginsTable';
import { RegionsTable } from '@/components/admin/tables/RegionsTable';
import { AddOrigin } from '@/components/admin/other/AddOrigin';
import { AddRegion } from '@/components/admin/other/AddRegion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';

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

function AdminOrigins() {
  const [activeTab, setActiveTab] = useState<'origins' | 'regions'>('origins');

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

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
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[94vw]' : 'w-[84vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        <div className="p-5 my-4">
          <div className="flex justify-between">
            <h3 className="font-semibold text-2xl">Origins</h3>
          </div>
          <div
            className={`flex flex-col gap-5 mt-8 md:flex-row md:justify-between md:items-center md:my-2 w-[90vw] ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'} mt-20 md:mt-0 `}
          >
            <div className="flex gap-3 items-center">
              <h4
                className={`cursor-pointer ${activeTab === 'origins' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('origins')}
              >
                Origins
              </h4>
              <h4
                className={`cursor-pointer ${activeTab === 'regions' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('regions')}
              >
                Regions
              </h4>
            </div>
            <div className="flex gap-2">
              <Search />
              {activeTab === 'origins' ? <AddOrigin /> : <AddRegion />}
            </div>
          </div>

          <div
            className={`border my-8 rounded-t-[8px] overflow-hidden w-[90vw] ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'}`}
          >
            {activeTab === 'origins' ? (
              <OriginsTable origins={origins} />
            ) : (
              <RegionsTable regions={regions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrigins;
