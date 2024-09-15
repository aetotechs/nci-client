import { IStatus } from "@/App";
import AdminHeader from "@/components/AdminHeader";
import AdminSideBarDesktop from "@/components/AdminSideBarDesktop";
import Dashboard from "@/components/Dashboard";

function Admin({status}:IStatus) {
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary">
        <AdminSideBarDesktop/>
      </div>
      <div className="col-span-6 ">
        <AdminHeader/>
        <div className="p-5">

        <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
