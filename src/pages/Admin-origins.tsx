import { useState } from 'react';
import { AddCategory } from '@/components/AddCategory';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import Search from '@/components/Search';
import { OriginsTable } from '@/components/tables/OriginsTable';
import { RegionsTable } from '@/components/tables/RegionsTable';
import { AddOrigin } from '@/components/AddOrigin';
import { AddRegion } from '@/components/AddRegion';

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

  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6">
        <AdminHeader />
        <div className="p-5 my-14">
          <div className="flex justify-between">
            <h3 className="font-semibold text-2xl">Origins</h3>
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="flex gap-3 items-center">
              <h4
                className={`cursor-pointer ${activeTab === 'origins' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('origins')}>
                Origins
              </h4>
              <h4
                className={`cursor-pointer ${activeTab === 'regions' ? 'underline font-semibold' : ''}`}
                onClick={() => setActiveTab('regions')}>
                Regions
              </h4>
            </div>
            <div className="flex gap-2">
              <Search />
              {activeTab === 'origins' ? <AddOrigin /> : <AddRegion />}
            </div>
          </div>

          <div className="border my-8 rounded-t-[8px] overflow-hidden">
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
