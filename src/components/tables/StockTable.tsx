import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '../ui/badge';

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
      <TableHeader className="bg-muted h-9 rounded-md">
        <TableRow>
          <TableHead>Coffee Brand</TableHead>
          <TableHead>Samples</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {coffeebrands.map((brand, index) => (
          <TableRow key={index} className="border-b h-10">
            <TableCell className="font-medium">{brand.name}</TableCell>
            <TableCell>
              {brand.samples}
              <Badge
                variant="outline"
                className={`ml-2 ${brand.samples > 0 ? 'bg-Availablebackground text-Availabletext' : 'bg-destructive text-red-400'} px-2 border-none`}
              >
                {brand.samples > 0 ? (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-green-400"></div>Available
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-red-300"></div>Not Available
                  </div>
                )}
              </Badge>
            </TableCell>
            <TableCell>
              {brand.bags}
              <Badge
                variant="outline"
                className={`ml-2 ${brand.bags > 0 ? 'bg-Availablebackground text-Availabletext' : 'bg-destructive text-red-400'} px-2 border-none`}
              >
                {brand.bags > 0 ? (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-green-400"></div>Available
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <div className="h-1 w-1 rounded-full bg-red-300"></div>Not Available
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
