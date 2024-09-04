import { Button } from '@/components/ui/button';

function CoffeeGuide() {
  return (
    <div className="rounded-2xl h-[286px] flex flex-col  items-center bg-benefits pt-10  mt-28">
      <div className="">
        <h3 className="font-semibold text-[26px] text-white">Sample Roasting Guide</h3>
      </div>
      <div className="text-white font-normal text-[17px] w-[968px] my-3">
        Consistency is key when sample roasting. Yet, your first crack won’t always happen at the
        same time, which makes it difficult to know when to end your roast. Use this guide to know
        when to discharge depending on how long it took you to reach first crack.
      </div>
      <div>
        <Button className="text-white bg-primary h-[51px] rounded-[10px] w-[208px]">
          Download the Guide
        </Button>
      </div>
    </div>
  );
}

export default CoffeeGuide;
