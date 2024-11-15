import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';

import { Badge } from '../../common/ui/badge';
import { ActionsPopover } from '../other/Actions';

export interface IOrigins {
  id: string;
  name: string;
  numberOfRegions: number;
  coffeeRegion: string[];
  description?: string;
}

interface IOriginsTable {
  origins: IOrigins[];
  origin?: IOrigins;
}

export function OriginsTable({ origins, origin }: IOriginsTable) {
  return (
    <Table>
      <TableHeader className=" h-9 bg-primary/10 ">
        <TableRow>
          <TableHead className="text-dark font-medium ">ID</TableHead>
          <TableHead className="text-dark font-medium">Name</TableHead>
          <TableHead className="text-dark font-medium text-center">Number of Regions</TableHead>
          <TableHead className="text-dark font-medium text-center">Regions</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {origins.map((origin, index) => (
          <TableRow key={index} className="border-b h-10 ">
            <TableCell className="font-medium ">#{index + 1}</TableCell>
            <TableCell className="font-medium">{origin.name}</TableCell>
            <TableCell className="flex justify-center">{origin.numberOfRegions}</TableCell>
            <TableCell>
              <div className="flex gap-2 flex-wrap justify-center">
                {origin.coffeeRegion.map((subregion, subIndex) => (
                  <Badge
                    variant="outline"
                    key={subIndex}
                    className=" text-textdarken  bg-inputfield border-none text-xs font-medium px-2 py-1 rounded-[5px]"
                  >
                    {subregion}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <ActionsPopover origin={origin} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
