import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/common/ui/table';
import { Badge } from '../../common/ui/badge';

export interface ICoffee {
  name: string;
  samples: number;
  bags: number;
}

interface IStockTableProps {
  coffeebrands: ICoffee[];
}

export function StockTable({ coffeebrands }: IStockTableProps) {
  return (
    <Table>
      <TableHeader className="bg-[#f2f2f2] h-9 rounded-md">
        <TableRow className="text-sm font-medium ">
          <TableHead className="text-[#585962]">Coffee Brand</TableHead>
          <TableHead className="text-[#585962]">Samples</TableHead>
          <TableHead className="text-[#585962]">Bags</TableHead>

          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coffeebrands.map((brand, index) => (
          <TableRow key={index} className="border-b border-primary/15 max-h-[20px]">
            <TableCell className="font-normal text-sm py-2">{brand.name}</TableCell>
            <TableCell className="py-3">
              {brand.samples}
              <Badge
                variant="outline"
                className={`ml-2 ${brand.samples > 0 ? 'bg-[#009a681f] text-[#009a68]' : 'bg-[#f443361f] text-[#f44336]'} px-2 border-none font-normal`}
              >
                {brand.samples > 0 ? (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-[#009a68]"></div>Available
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-[#f44336]"></div>Not Available
                  </div>
                )}
              </Badge>
            </TableCell>
            <TableCell className="py-3">
              {brand.bags}
              <Badge
                variant="outline"
                className={`ml-2 ${brand.bags > 0 ? 'bg-[#009a681f] text-[#009a68]' : 'bg-destructive text-[#f44336]'} px-2 border-none font-normal`}
              >
                {brand.bags > 0 ? (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-[#009a68]"></div>Available
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-[#f44336]"></div>Not Available
                  </div>
                )}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
