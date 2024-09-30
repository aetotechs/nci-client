import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';
import { DialogDemo } from '../ChangeUser';

export interface IUsers {
  userId?: string;
  name: string;
  email: string;
  role: string;
  imageUrl?: string;
}

interface IUsersTableProps {
  users: IUsers[];
  userId?: IUsers;
}
export function checkRole(role: string) {
  switch (role) {
    case 'Admin':
      return 'bg-red-100 text-red-500';
    case 'User':
      return 'bg-blue-100 text-blue-700';

    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function UsersTable({ users, userId }: IUsersTableProps) {
  return (
    <Table>
      <TableHeader className="h-9 bg-primary/10 text-textdark">
        <TableRow>
          <TableHead className="text-dark font-medium">User</TableHead>
          <TableHead className="text-dark font-medium">Role</TableHead>

          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {users.map((user, index) => (
          <TableRow key={index} className="h-[70px] btransaction-b last:btransaction-b-0">
            <TableCell className="font-medium flex gap-2">
              <div className="rounded-full h-5 w-5">
                {user.imageUrl ? (
                  <img src={user.imageUrl} alt={user.name}></img>
                ) : (
                  <img src="/icons/user.svg" alt="User" />
                )}
              </div>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </TableCell>

            <TableCell className="">
              <div
                className={`flex h-max w-[77px] px-2 py-1 rounded-[6px]  ${checkRole(user.role)}`}
              >
                <DialogDemo role={user.role} name={user.name} />
              </div>
            </TableCell>

            <TableCell className="relative">
              <ActionsPopover />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
