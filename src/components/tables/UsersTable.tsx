import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';

export interface IUsers {
  userId: string;
  name: string;
  email: string;
  role: string;
}

interface IUsersTableProps {
  users: IUsers[];
  userId?: IUsers;
}
export function checkStatus(role: string) {
  switch (status) {
    case 'Admin':
      return 'bg-yellow-100 text-primary';
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

          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="bg-white border border-primary/30 p-3 rounded-3xl ">
        {users.map((user, index) => (
          <TableRow key={index} className="h-[70px] btransaction-b last:btransaction-b-0">
            <TableCell className="font-medium flex gap-2">
              <div></div>
              <div>{user.name}</div>
              <div>{user.email}</div>
            </TableCell>

            <TableCell className="flex justify-center items-center">
              <div
                className={`flex h-max w-max px-2 py-1 rounded-[5px] boder-none items-center gap-1 ${checkStatus(user.role)}`}>
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                {user.role}
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
