import { Link } from 'react-router-dom';
import { MobileSideBar } from './MobileSideNav';

function AdminMobileNav() {
  return (
    <div className="flex h-[70px] bg-white justify-between md:hidden px-4 w-[100vw] fixed z-20 top-0">
      <div className="flex items-center gap-7">
        <div>
          <MobileSideBar />
        </div>
        <Link to="/admin">
          <div className="w-[25vw] py-2 h-[40px]">
            <img src="/logos/logo.png" alt="coffee logo" width="200" height={38} />
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-7">
        <img src="/icons/notification.svg" alt="Notifications" width={24} />
        <div className="h-9 w-9">
          <img src="/icons/avatar.png" alt="Avatars" />
        </div>
      </div>
    </div>
  );
}

export default AdminMobileNav;
