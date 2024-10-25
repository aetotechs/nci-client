import { AddCategory } from '@/components/admin/other/AddCategory';
import AdminHeader from '@/components/admin/other/AdminHeader';
import AdminMobileNav from '@/components/admin/other/AdminMobileNav';
import AdminSideBarDesktop from '@/components/admin/other/AdminSideBarDesktop';
import Search from '@/components/user/other/Search';
import { CategoriesTable, ICategories } from '@/components/admin/tables/Categories';
import { FetchCategories } from '@/utils/hooks/api-routes';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function Categories() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(FetchCategories);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);
  

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

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

          {loading ? (
            <div className="my-10">Loading categories...</div>
          ) : error ? (
            <div className="my-10 text-red-500">Error: {error}</div>
          ) : (
            <>
              <div className="border my-10 rounded-t-[8px] overflow-hidden">
                <CategoriesTable categories={categories} />
              </div>
              <div>
                <span className="font-normal text-[12px]">
                  Showing: {categories.length} of {categories.length}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
