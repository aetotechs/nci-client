
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


export function OriginsSheet() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <p>Origins</p>
      </PopoverTrigger>
      <PopoverContent className="md:w-[1232px] md:mx-14 md:mt-9 p-0 overflow-hidden">
        <div className="flex flex-col gap-2  md:justify-around mt-5 mb-10">
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">Latin Caribean and America</h3>
            <p>Brazil</p>
            <p>Columbia</p>
            <p>Bolivia</p>
            <p>Mexico</p>
            <p>Peru</p>
            <p className="text-primary">View all</p>
          </div>
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">Asia and Pacific islands</h3>
            <p>India</p>
            <p>Sumatra</p>
            <p>Papua</p>
            <p>Sulawesi</p>
            <p>Java</p>
            <p className="text-primary">View all</p>
          </div>
          <div className="text-textcolor flex flex-col gap-1">
            <h3 className="font-semibold text-base">Africa and MiddleEast</h3>
            <p>Burundi</p>
            <p>Kenya</p>
            <p>Tanzania</p>
            <p>Uganda</p>
            <p>Ethopia</p>
            <p className="text-primary">View all</p>
          </div>
        </div>
        <div className="py-1 fixed bottom-0 bg-muted w-[1230px] rounded-bl-md rounded-br-md text-center  text-textcolor  ">
          <span className="font-semibold">C-Market:$2.43 USD </span> <span className='font-normal'>as of 03/05/2024</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
