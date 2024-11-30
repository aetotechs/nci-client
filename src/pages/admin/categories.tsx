import { AddCategory } from '@/components/admin/other/AddCategory';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import Search from '@/components/user/other/Search';
import { CategoriesTable } from '@/components/admin/tables/Categories';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GetCategories } from '@/utils/services/FetchAdminCategories';
import { PaginationDemo } from '@/components/admin/other/Pagination';

function Categories() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const categories = GetCategories();
  const categoriesPerPage = 8;

  useEffect(() => {
    if (categories.length > 0) {
      setLoading(false);
    }
  }, [categories]);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const totalPages = Math.ceil(categories.length / categoriesPerPage);
  const currentCategories = categories.slice(
    (currentPage - 1) * categoriesPerPage,
    currentPage * categoriesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`flex w-[100vw] relative`}>
      <div
        className={`w-[15vw] hidden md:flex bg-white h-screen border-r border-primary/30 sticky top-0 transition-all duration-300 ${isCollapsed && 'w-[5vw] overflow-x-hidden'}`}>
        <AdminSideBarDesktop isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} />
      </div>
      <div className="absolute top-4 hidden md:flex">
        <button
          onClick={toggleCollapse}
          className={`text-primary bg-white shadow-md z-50 fixed rounded-sm translate-x-[14vw] ${isCollapsed && 'translate-x-[4vw]'}`}>
          {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className=" " />}
        </button>
      </div>
      <div
        className={`w-[100vw] transition-all duration-100 ${isCollapsed ? 'w-[94vw]' : 'w-[84vw]'}`}>
        <AdminHeader />
        <AdminMobileNav />
        <div className="px-5 mt-20 md:mt-4">
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <h3 className="font-semibold text-2xl">Categories</h3>
            <div className="flex gap-2">
              <Search />
              <AddCategory />
            </div>
          </div>

          <div className="border my-10 rounded-t-[8px] overflow-hidden">
            {loading ? (
              <div className="flex justify-center my-4 font-lg ">Fetching Categories...</div>
            ) : currentCategories.length > 0 ? (
              <CategoriesTable categories={currentCategories} />
            ) : (
              <h3 className="text-center font-semibold">No Categories found, Add One</h3>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="font-normal text-[14px]">
              Showing {currentCategories.length} of {categories.length}
            </span>
            <PaginationDemo
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
