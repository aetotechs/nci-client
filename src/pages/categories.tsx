import { AddCategory } from '@/components/AddCategory';
import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';

import Search from '@/components/Search';
import { CategoriesTable } from '@/components/tables/Categories';

const categories = [
  {
    id:'1',
    name: 'Blends',
    description: 'Coffee from one specific region',
    subcategories: ['Naturals', 'Staff Picks', 'Espresso Options', 'Certified Coffees']
  },
  {
    id:'2',
    name: 'New Arrivals',
    description: 'Mix of beans from different regions',
    subcategories: ['Blends', 'Single Origin']
  },
  {
    id:'3',
    name: 'Decaf',
    description: 'Coffee with reduced caffeine',
    subcategories: ['Cafe Delas', 'Peru Kovachii', 'Colombia Dulima']
  }
];
function Categories() {
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6 ">
        <AdminHeader />
        <div className="px-5 md:mt-4">
        <div className="flex justify-between">
            <h3 className="font-semibold text-2xl">Categories</h3>
            <div className="flex gap-2">
              <Search />
             <AddCategory/>
            </div>
          </div>

          <div className="border my-10 rounded-t-[8px]  overflow-hidden">
            <CategoriesTable categories={categories} />
          </div>
        <div>
          <span className='font-normal text-[12px]'>Showing: {categories.length} of {categories.length}</span>

        </div>

        </div>
      </div>
    </div>
  );
}

export default Categories;
