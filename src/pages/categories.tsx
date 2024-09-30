import { AddCategory } from '@/components/AddCategory';
import AdminHeader from '@/components/AdminHeader';
import AdminMobileNav from '@/components/AdminMobileNav';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';

import Search from '@/components/Search';
import { CategoriesTable } from '@/components/tables/Categories';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const categories = [
  {
    id: '1',
    name: 'Blends',
    description: 'Coffee from one specific region',
    subcategories: ['Naturals', 'Staff Picks', 'Espresso Options', 'Certified Coffees']
  },
  {
    id: '2',
    name: 'New Arrivals',
    description: 'Mix of beans from different regions',
    subcategories: ['Blends', 'Single Origin']
  },
  {
    id: '3',
    name: 'Decaf',
    description: 'Coffee with reduced caffeine',
    subcategories: ['Cafe Delas', 'Peru Kovachii', 'Colombia Dulima']
  }
];
function Categories() {
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
        <div className="px-5 mt-20 md:mt-4">
          <div className="flex flex-col gap-3 md:flex-row justify-between">
            <h3 className="font-semibold text-2xl">Categories</h3>
            <div className="flex gap-2">
              <Search />
              <AddCategory />
            </div>
          </div>

          <div className="border my-10 rounded-t-[8px]  overflow-hidden">
            <CategoriesTable categories={categories} />
          </div>
          <div>
            <span className="font-normal text-[12px]">
              Showing: {categories.length} of {categories.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
