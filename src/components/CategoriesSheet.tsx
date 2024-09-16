import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function CategoriesSheet() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p>Categories</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[1232px] md:mx-14 md:mt-9 p-0 overflow-auto">
        <div className="flex flex-col gap-2 md:flex-row md:justify-around mt-5 mb-10 overflow-auto">
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">Curated Categories</h3>
            <p>Top Lots</p>
            <p>Espresso Options</p>
            <p>Great for Cold Brew</p>
            <p>Staff Picks</p>
            <p>Naturals</p>
          </div>
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">Nile Coffee Brands</h3>
            <p>Cafe Delas</p>
            <p>Brazil Eagle Mogiana</p>
            <p>Brazil Eagle Espresso</p>
            <p>Colombia Dulima</p>
            <p>Peru Kovachii</p>
          </div>
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">New Arrivals</h3>
            <p>New spot</p>
            <p>New Forward</p>
          </div>
        </div>
        <div className="py-1 fixed bottom-0 bg-muted md:w-[1230px] rounded-bl-md rounded-br-md text-center  text-textcolor  ">
          <span className="font-semibold">C-Market:$2.43 USD </span>{' '}
          <span className="font-normal">as of 03/05/2024</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
