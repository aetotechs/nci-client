import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

import { Badge } from '../ui/badge';
import { ActionsPopover } from '../Actions';

export interface ICategories {
  id: string;
  name: string;
  description: string;
  subcategories: string[];
}

interface ICategoriesTable {
  categories: ICategories[];
  category?: ICategories;
}

export function CategoriesTable({ categories, category }: ICategoriesTable) {
  return (
    <Table>
      <TableHeader className=" h-9 bg-primary/10 ">
        <TableRow>
          <TableHead className="text-dark font-medium ">ID</TableHead>
          <TableHead className="text-dark font-medium">Name</TableHead>
          <TableHead className="text-dark font-medium">Description</TableHead>
          <TableHead className="text-dark font-medium">Subcategories</TableHead>
          <TableHead>
            <span className="flex md:hidden">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category, index) => (
          <TableRow key={index} className="border-b h-10 ">
            <TableCell className="font-medium ">#{index + 1}</TableCell>
            <TableCell className="font-medium">{category.name}</TableCell>
            <TableCell>{category.description}</TableCell>
            <TableCell>
              <div className="flex gap-2 flex-wrap">
                {category.subcategories.map((subcategory, subIndex) => (
                  <Badge
                    variant="outline"
                    key={subIndex}
                    className=" text-textdarken  bg-inputfield border-none text-xs font-medium px-2 py-1 rounded-[5px]"
                  >
                    {subcategory}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <ActionsPopover category={category} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
