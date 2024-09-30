import { AddUser } from './AddUser';
import { UsersTable } from './tables/UsersTable';
import { Badge } from './ui/badge';
const users = [
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    imageUrl: '/icons/avatar.png'
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin',
    imageUrl: '/icons/avatar.png'
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin'
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'User'
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'User'
  },
  {
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Admin'
  }
];

// function Users() {
//   return (
//     <div className="flex gap-7">

//   );
// }

// export default Users;

function Users() {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="grow">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <h3 className="font-semibold text-2xl">Users</h3>
            <Badge
              variant="outline"
              className="h-6 w-8 rounded-[5px] border-primary/30 bg-white justify-center text-primary"
            >
              {users.length}
            </Badge>
          </div>
          <AddUser />
        </div>

        <div className="border mt-4 rounded-t-[8px]  overflow-hidden">
          <UsersTable users={users} />
        </div>
        <div>
          <span className="font-normal text-[12px]">
            Showing: {users.length} of {users.length}
          </span>
        </div>
      </div>

      <div className="border border-primary/30 md:max-w-[35vw] bg-white flex flex-col gap-2 py-1 px-3 grow rounded-[8px] md:max-h-[236px] mt-12">
        <h3 className="font-semibold text-[15px] text-textdark">User Access Control</h3>
        <p className="text-textmuted text-sm font-normal">
          Assign roles to control user access across the platform.
        </p>
        <h5>Admin role</h5>
        <p className="text-textmuted text-sm font-normal">
          Admins have access to the entire site. They manage users, orders, and overall analytics.
        </p>
        <h5>User role</h5>
        <p className="text-textmuted text-sm font-normal">
          Users have access to all services but cannot edit platform settings or access admin
          privileges.
        </p>
      </div>
    </div>
  );
}

export default Users;
