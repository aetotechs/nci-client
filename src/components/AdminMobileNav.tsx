import { MenuIcon } from 'lucide-react';

function AdminMobileNav() {
  return (
    <div className="flex h-[70px] bg-white justify-between md:hidden px-4 w-[100vw] fixed z-20 top-0">
      <div className="flex items-center">
        <div>
          <MenuIcon />
        </div>
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
