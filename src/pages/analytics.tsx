import AdminHeader from '@/components/AdminHeader';
import AdminSideBarDesktop from '@/components/AdminSideBarDesktop';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';


function Analytics() {
  return (
    <div className="grid grid-cols-7 md:h-screen">
      <div className="col-span-1 bg-white border-r border-primary/30 sticky top-0">
        <AdminSideBarDesktop />
      </div>
      <div className="col-span-6 ">
        <AdminHeader />
        <div className="p-5">
          <AnalyticsDashboard />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
