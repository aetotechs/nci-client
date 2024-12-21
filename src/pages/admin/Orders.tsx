import AddListing from '@/components/admin/other/AddListing';
import { OrderSheet } from '@/components/admin/other/AddOrder';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import { FilterSheet } from '@/components/user/other/CoffeeListingFiltersMobile';
import { ListingFilter } from '@/components/user/other/ListingFilter';
import Search from '@/components/user/other/Search';
import { AdminOrdersTable } from '@/components/admin/tables/AdminOrdersTable';
import { Badge } from '@/components/common/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { GetOrders } from '@/utils/services/FetchAdminOrders';
import { PaginationDemo } from '@/components/admin/other/Pagination';
import { Skeleton } from '@/components/common/ui/Skeleton';

// export const orders = [
//   {
//     id: '1',
//     orderDate: '2024-01-01',
//     status: 'Shipped',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '2',
//     orderDate: '2024-01-01',
//     status: 'Cancelled',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '3',
//     orderDate: '2024-01-01',
//     status: 'Processing',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '4',
//     orderDate: '2024-01-01',
//     status: 'Shipped',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '5',
//     orderDate: '2024-01-01',
//     status: 'Cancelled',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '6',
//     orderDate: '2024-01-01',
//     status: 'Processing',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   },
//   {
//     id: '7',
//     orderDate: '2024-01-01',
//     status: 'Shipped',
//     orderItems: ['item1', 'item2'],
//     customer: 'John Doe',
//     revenue: 100
//   }
// ];
function Orders() {
  const [showAddListing, setShowAddListing] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 8;

  const orders = GetOrders();

  useEffect(() => {
    if (orders.length > 0) {
      setLoading(false);
    }
  }, [orders]);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const HandleClick = () => {
    setShowAddListing((prev) => !prev);
  };

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const currentorders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
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
      </div>{' '}
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md  z-50 fixed  rounded-sm translate-x-[14vw] ${isCollapsed && 'translate-x-[4vw]'}`}
        >
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[85vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        {showAddListing ? (
          <AddListing isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
        ) : (
          <div
            className={`p-5 md:py-5 md:pl-5 mt-20 md:mt-0 w-[90vw]  ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'} `}
          >
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-2xl">Orders</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {orders.length}
              </Badge>
            </div>
            <div className="flex gap-5 justify-between mt-5  ">
              <Search />
              <div className="flex gap-2">
                <div className="hidden md:flex">
                  <ListingFilter />
                </div>
                <div className="flex md:hidden">
                  <FilterSheet />
                </div>
                <OrderSheet />
              </div>
            </div>

            {loading ? (
              <div className="my-8 border rounded-t-[8px] p-4 space-y-4">
                {Array.from({ length: ordersPerPage }).map((_, index) => (
                  <Skeleton key={index} className="h-12 w-full" />
                ))}
              </div>
            ) : currentorders.length > 0 ? (
              <div
                className={`border my-8 rounded-t-[8px] overflow-hidden w-[90vw] ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'}`}
              >
                <AdminOrdersTable orders={currentorders} />
              </div>
            ) : (
              <h3 className="text-center font-semibold">No orders found, Add One</h3>
            )}
            <div className="flex justify-between items-center">
              <span className="font-normal text-[14px]">
                Showing {currentorders.length} of {orders.length}
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

export default Orders;
