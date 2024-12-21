import { AddCustomer } from '@/components/admin/other/AddCustomer';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import { FilterSheet } from '@/components/user/other/CoffeeListingFiltersMobile';
import { ListingFilter } from '@/components/user/other/ListingFilter';
import Search from '@/components/user/other/Search';

import { CustomersTable } from '@/components/admin/tables/CustomersTable';

import { Badge } from '@/components/common/ui/badge';
import ViewCustomer from '@/components/admin/other/ViewCustomer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useState } from 'react';
import { FetchUsers } from '@/utils/services/FetchUsers';
import { PaginationDemo } from '@/components/admin/other/Pagination';
import { Skeleton } from '@/components/common/ui/Skeleton';

function Customers() {
  const { usersWithOrders: users, loading } = FetchUsers();
  const [currentPage, setCurrentPage] = useState(1);

  const customersPerPage = 8;
  console.log(users);
  const [showViewCustomer, setShowViewCustomer] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const totalPages = Math.ceil(users.length / customersPerPage);
  const currentCustomers = users.slice(
    (currentPage - 1) * customersPerPage,
    currentPage * customersPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
        {showViewCustomer ? (
          <ViewCustomer isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        ) : (
          <div
            className={`p-5 md:pr-10 w-[100vw] ${isCollapsed ? 'md:w-[95vw] ' : 'md:w-[85vw]'} mt-20 md:mt-0 `}
          >
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">Customers</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {users.length}
              </Badge>
            </div>
            <div className="flex justify-between my-5">
              <Search />
              <div className="flex gap-3">
                <div className="hidden md:flex">
                  <ListingFilter />
                </div>
                <div className="flex md:hidden mx-2">
                  <FilterSheet />
                </div>
                <AddCustomer />
              </div>
            </div>

            {loading ? (
              <div className="my-8 border rounded-t-[8px] p-4 space-y-4">
                {Array.from({ length: customersPerPage }).map((_, index) => (
                  <Skeleton key={index} className="h-12 w-full" />
                ))}
              </div>
            ) : currentCustomers.length > 0 ? (
              <div className="my-10 md:my-0">
                <CustomersTable
                  customers={currentCustomers}
                  setShowViewCustomer={setShowViewCustomer}
                />
              </div>
            ) : (
              <h3 className="text-center font-semibold">No Customers found, Add One</h3>
            )}

            <div className="flex justify-between items-center my-4">
              <span className="font-normal text-[14px]">
                Showing {currentCustomers.length} of {users.length}
              </span>
              <PaginationDemo
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
