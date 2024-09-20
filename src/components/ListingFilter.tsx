
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FilterForm } from "./forms/FilterForm"
import { Button } from "./ui/button"

export function ListingFilter() {
  return (
    <Popover>
      <PopoverTrigger asChild>
      <Button variant="outline" className="text-primary border-primary w-[111px] gap-2">
          <span>
            <img src="/icons/filter.png" />
          </span>
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent>
     <FilterForm/>
      </PopoverContent>
    </Popover>
  )
}
