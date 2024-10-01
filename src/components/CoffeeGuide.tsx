import { Button } from '@/components/ui/button';

function CoffeeGuide() {
  return (
    <div className="rounded-2xl  py-5  px-5 flex flex-col  items-center bg-benefits md:pt-10  md:mt-24">
      <div className="">
        <h3 className="font-semibold text-[24px] text-white">Sample Roasting Guide</h3>
      </div>
      <div className="text-white font-normal text-[15px] md:w-[968px] my-3">
        Consistency is key when sample roasting. Yet, your first crack won’t always happen at the
        same time, which makes it difficult to know when to end your roast. Use this guide to know
        when to discharge depending on how long it took you to reach first crack.
      </div>
      <div>
        <Button className="text-white bg-primary py-2 my-4 text-[14px] rounded-[10px] ">
          Download the Guide
        </Button>
      </div>
    </div>
  );
}

export default CoffeeGuide;
