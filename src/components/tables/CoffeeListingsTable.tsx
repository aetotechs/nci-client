import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { ActionsPopover } from '../Actions';

export interface IListings {
  id: string;
  brand: string;
  region: string;
  bagPrice: number;
  samplePrice: number;

  bagWeight: number;
  sampleStock: number;
  bagStock: number;
}

interface ICoffeeListingsTable {
  listings: IListings[];
  listing?: IListings;
}

export function CoffeeListingsTable({ listings, listing }: ICoffeeListingsTable) {
  return (
    <Table>
      <TableHeader className=" h-9 bg-primary/10 ">
        <TableRow>
          <TableHead className="text-dark font-medium ">Coffee Brand</TableHead>
          <TableHead className="text-dark font-medium">Region</TableHead>
          <TableHead className="text-dark font-medium ">Price (Pound/Bag)</TableHead>
          <TableHead className="text-dark font-medium ">Bag Weight (kg)</TableHead>
          <TableHead className="text-dark font-medium ">Stock (Samples/Bags)</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listings.map((listing, index) => (
          <TableRow key={index} className="border-b h-10 ">
            <TableCell className="font-medium ">{listing.brand}</TableCell>
            <TableCell className="font-medium">{listing.region}</TableCell>
            <TableCell className="flex flex-col gap-2 text-[15px]">
              <span className="font-normal text-textdark"> ${listing.samplePrice}/lb</span>
              <span className="font-mormal text-gray-500"> ${listing.bagPrice}/bag</span>
            </TableCell>
            <TableCell className="">{listing.bagWeight}</TableCell>
            <TableCell className="">
              <span
                className={`${listing.sampleStock > 0 ? 'text-Availabletext' : 'text-red-400'}`}
              >
                {listing.sampleStock} samples
              </span>{' '}
              /{' '}
              <span className={`${listing.bagStock > 0 ? 'text-Availabletext' : 'text-red-400'}`}>
                {listing.bagStock} bags
              </span>
            </TableCell>
            <TableCell>
              <ActionsPopover listing={listing} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
