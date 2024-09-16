import { Separator } from '@/components/ui/separator';
import Counter from './Counter';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';

function ProductDetails() {
  return (
    <div className="bg-white rounded-[8px] mx-5 md:mx-0 w-[90vw] md:w-full">
      <div className="bg-white px-5">
        <div className="flex items-center pt-4 ">
          <h3 className="font-semibold text-xl">$2.83/lb</h3>
          <div className="font-light text-base mt-2">$374/bag</div>
        </div>
        <div className="flex flex-col gap-4 my-3">
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Bag Weight</div>
            <div className="font-medium text-base">60kg Bag</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Harvest Season</div>
            <div className="font-medium text-base">2023/24</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Status</div>
            <div className="font-medium text-base">Spot</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Lot Number</div>
            <div className="font-medium text-base">P611992-2</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Warehouse </div>
            <div className="font-medium text-base">Alameda, CA</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-base text-inactive">Availability</div>
            <div>
              <div className="flex justify-end gap-2">
                <h5 className="font-medium text-base">Bags</h5>{' '}
                <span className="text-green-500">(Available)</span>
              </div>
              <div className="flex gap-2">
                <h5 className="font-medium text-base">Samples</h5>{' '}
                <span className="text-destructive">(Not Available)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 md:flex-row    md:justify-between ">
              <Counter className="h-[43px] md:w-[104px] rounded-[6px] text-textcolor" />
              <Button className="h-[43px ] md:w-[157px] bg-primary text-white font-medium text-[17px]">
                Add to Cart
              </Button>
              <Button className="h-[43px ] md:w-[157px] bg-white text-primary font-medium text-[17px] border border-primary">
                Request Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <Separator />
      </div>
      <div className="text-textcolor flex items-center gap-2 pb-4 px-5">
        <Bookmark className="h-4 w-4" />
        <span className="font-normal text-sm">Save item for later</span>
      </div>
    </div>
  );
}

export default ProductDetails;
