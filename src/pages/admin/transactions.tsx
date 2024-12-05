import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import { FilterSheet } from '@/components/user/other/CoffeeListingMobile';

import { TransactionsTable } from '@/components/admin/tables/TransactionsTable';
import { TransactionFilter } from '@/components/user/other/TransactionFilter';

import { Badge } from '@/components/common/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FetchTransactions } from '@/utils/services/FetchTranscations';
import { Skeleton } from '@/components/common/ui/Skeleton';
import { PaginationDemo } from '@/components/admin/other/Pagination';

function Transactions() {
  const transactions = FetchTransactions();
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const TransactionsPerPage = 8;
  useEffect(() => {
    if (transactions.length > 0) {
      setLoading(false);
    }
  }, [transactions]);

  const totalPages = Math.ceil(transactions.length / TransactionsPerPage);
  const currenttransactions = transactions.slice(
    (currentPage - 1) * TransactionsPerPage,
    currentPage * TransactionsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
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

        <div
          className={`p-5 md:pr-10 w-[100vw] ${isCollapsed ? 'md:w-[94vw] ' : 'md:w-[84vw]'} mt-20 md:mt-0 `}
        >
          <div className="flex justify-between  w-full  items-center">
            <div className="flex gap-3 items-center">
              <h3 className="font-semibold text-[22px]">Transactions</h3>
              <Badge
                variant="outline"
                className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
              >
                {transactions.length}
              </Badge>
            </div>
            <div className="flex md:hidden">
              <FilterSheet />
            </div>
            <div className="hidden md:flex justify-between md:mt-5">
              <TransactionFilter />
            </div>
          </div>
        </div>
        {loading ? (
          <div className="my- border rounded-t-[8px] p-4 space-y-4 mx-5">
            {Array.from({ length: TransactionsPerPage }).map((_, index) => (
              <Skeleton key={index} className="h-12 " />
            ))}
          </div>
        ) : currenttransactions.length > 0 ? (
          <div
            className={`border mx-5 my-6 rounded-t-[8px] overflow-hidden w-[90vw] ${isCollapsed ? 'md:w-[90vw] ' : 'md:w-[80vw]'}`}
          >
            <TransactionsTable transactions={transactions} />
          </div>
        ) : (
          <h3 className="text-center font-semibold">No orders found, Add One</h3>
        )}
        <div className="flex justify-between items-center mx-5">
          <span className="font-normal text-[14px]">
            Showing {currenttransactions.length} of {transactions.length}
          </span>
          <PaginationDemo
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Transactions;
