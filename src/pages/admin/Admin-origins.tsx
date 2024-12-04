import { useState, useEffect } from 'react';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import Search from '@/components/user/other/Search';
import { OriginsTable } from '@/components/admin/tables/OriginsTable';
import { RegionsTable } from '@/components/admin/tables/RegionsTable';
import { AddOrigin } from '@/components/admin/other/AddOrigin';
import { AddRegion } from '@/components/admin/other/AddRegion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import { GetOrigins } from '@/utils/services/FetchAdminOrigins';
import { GetRegions } from '@/utils/services/FetchAdminRegions';
import { PaginationDemo } from '@/components/admin/other/Pagination';
import { Skeleton } from '@/components/common/ui/Skeleton';

function AdminOrigins() {
  const regions = GetRegions();
  const origins = GetOrigins();
  const [activeTab, setActiveTab] = useState<'origins' | 'regions'>('origins');
  const [originsLoading, setOriginsLoading] = useState(true);
  const [regionsLoading, setRegionsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const originsPerPage = 8;
  const regionsPerPage = 8;
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (origins.length > 0) {
      setOriginsLoading(false);
    }
  }, [origins]);

  useEffect(() => {
    if (regions.length > 0) {
      setRegionsLoading(false);
    }
  }, [regions]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const totalOriginsPages = Math.ceil(origins.length / originsPerPage);
  const currentOrigins = origins.slice(
    (currentPage - 1) * originsPerPage,
    currentPage * originsPerPage
  );

  const totalRegionsPages = Math.ceil(regions.length / regionsPerPage);
  const currentRegions = regions.slice(
    (currentPage - 1) * regionsPerPage,
    currentPage * regionsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalOriginsPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`flex w-[100vw] relative`}>
      <div
        className={`w-[15vw] hidden md:flex bg-white h-screen border-r border-primary/30 sticky top-0 transition-all duration-300 ${
          isCollapsed && 'w-[5vw] overflow-x-hidden'
        }`}
      >
        <AdminSideBarDesktop isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md z-50 fixed rounded-sm translate-x-[14vw] ${
            isCollapsed && 'translate-x-[4vw]'
          }`}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw] transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[85vw]'}`}
      >
        <AdminHeader />
        <AdminMobileNav />
        <div className="p-5 my-4">
          <div className="flex justify-between">
            <h3 className="font-semibold text-2xl">Origins</h3>
          </div>
          <div
            className={`flex flex-col gap-5 mt-8 md:flex-row md:justify-between md:items-center md:my-2 w-[90vw] ${
              isCollapsed ? 'md:w-[90vw]' : 'md:w-[80vw]'
            } mt-20 md:mt-0`}
          >
            <div className="flex gap-3 items-center">
              <h4
                className={`cursor-pointer ${
                  activeTab === 'origins' ? 'underline font-semibold' : ''
                }`}
                onClick={() => setActiveTab('origins')}
              >
                Origins
              </h4>
              <h4
                className={`cursor-pointer ${
                  activeTab === 'regions' ? 'underline font-semibold' : ''
                }`}
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
            className={`border my-8 rounded-t-[8px] overflow-hidden w-[90vw] ${
              isCollapsed ? 'md:w-[90vw]' : 'md:w-[80vw]'
            }`}
          >
            {activeTab === 'origins' ? (
              originsLoading ? (
                <>
                  {Array.from({ length: originsPerPage }).map((_, index) => (
                    <Skeleton key={index} className="h-12 w-full" />
                  ))}
                </>
              ) : origins.length === 0 ? (
                <div className="p-4 text-center">No origins found.</div>
              ) : (
                <OriginsTable origins={currentOrigins} />
              )
            ) : regionsLoading ? (
              <>
                {Array.from({ length: originsPerPage }).map((_, index) => (
                  <Skeleton key={index} className="h-12 w-full" />
                ))}
              </>
            ) : regions.length === 0 ? (
              <div className="p-4 text-center">No regions found.</div>
            ) : (
              <RegionsTable regions={currentRegions} />
            )}
          </div>

          <div className="flex justify-between items-center">
            {activeTab === 'origins' ? (
              <>
                <span className="font-normal text-[14px]">
                  Showing {currentOrigins.length} of {origins.length}
                </span>
                <PaginationDemo
                  currentPage={currentPage}
                  totalPages={totalOriginsPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <>
                <span className="font-normal text-[14px]">
                  Showing {currentRegions.length} of {regions.length}
                </span>
                <PaginationDemo
                  currentPage={currentPage}
                  totalPages={totalRegionsPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminOrigins;
