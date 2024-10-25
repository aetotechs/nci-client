import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';

import { ActionsPopover } from '../other/Actions';

export interface IRegions {
  id: string;
  name: string;
  origin: string;
  numberOfCoffeeListings: number;
}

interface IregionsTable {
  regions: IRegions[];
  region?: IRegions;
}

export function RegionsTable({ regions, region }: IregionsTable) {
  return (
    <Table>
      <TableHeader className=" h-9 bg-primary/10 ">
        <TableRow>
          <TableHead className="text-dark font-medium ">ID</TableHead>
          <TableHead className="text-dark font-medium">Name</TableHead>
          <TableHead className="text-dark font-medium ">Origin</TableHead>
          <TableHead className="text-dark font-medium ">Number Of coffee listings</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {regions.map((region, index) => (
          <TableRow key={index} className="border-b h-10 ">
            <TableCell className="font-medium ">#{index + 1}</TableCell>
            <TableCell className="font-medium">{region.name}</TableCell>
            <TableCell className="">{region.origin}</TableCell>
            <TableCell className="">{region.numberOfCoffeeListings}</TableCell>
            <TableCell>
              <ActionsPopover region={region} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
