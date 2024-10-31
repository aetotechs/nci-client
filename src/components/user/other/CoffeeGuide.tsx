import { Button } from '@/components/common/ui/button';

function CoffeeGuide() {
  return (
    <div className="rounded-2xl py-4 mt-16  md:py-5 px-[5%] grid gap-3 bg-benefits">
      <div className="text-center">
        <h3 className="font-semibold text-xl md:text-[24px] text-white">Sample Roasting Guide</h3>
      </div>
      <div className="text-white font-normal text-sm my-2">
        Consistency is key when sample roasting. Yet, your first crack won’t always happen at the
        same time, which makes it difficult to know when to end your roast. Use this guide to know
        when to discharge depending on how long it took you to reach first crack.
      </div>
      <div>
        <div className="flex justify-center">
          <Button className="text-white bg-primary text-sm rounded-[10px] ">
            Download the Guide
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoffeeGuide;
