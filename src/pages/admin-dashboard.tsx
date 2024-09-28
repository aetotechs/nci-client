import AdminHeader from '@/components/AdminHeader';
import AdminMobileNav from '@/components/AdminMobileNav';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import Dashboard from '@/components/Dashboard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Admin() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`flex w-[100vw]  relative ${isCollapsed && ' '}`}>
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
        className={`w-[100vw]   transition-all duration-100 ${isCollapsed ? 'w-[95vw]' : 'w-[85vw]'} `}
      >
        <AdminHeader />
        <AdminMobileNav />
        <div
          className={`px-6 py-5 overflow-hidden w-[98vw] ${isCollapsed ? 'md:w-[94vw] ' : 'md:w-[84vw]'}`}
        >
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default Admin;
