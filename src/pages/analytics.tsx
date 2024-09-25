import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';


function Analytics() {
  return (
    <div className="grid grid-cols-7 md:h-screen md:w-[100vw] ">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-5 w-[85vw] ">
        <AdminHeader />
        <div className="py-5 px-6">
          <AnalyticsDashboard />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
