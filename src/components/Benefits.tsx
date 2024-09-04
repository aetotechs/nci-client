import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function Benefits() {
  return (
    <div className="rounded-2xl h-[430px] flex flex-col  items-center bg-benefits pt-10  mt-28">
      <div className="">
        <h3 className="font-bold text-[36px] text-white">Exclusive Account Benefits</h3>
      </div>
      <div className="flex gap-3 mb-5 mt-5 pt-10 pb-10 px-20  ">
        <div className="px-10">
          <h4 className="font-bold text-xl text-primary">View Live Pricing</h4>
          <p className="text-[18px] text-white py-2">
            Access real-time custom pricing for our full catalog
          </p>
        </div>
        <Separator orientation="vertical" />

        <div className="px-10">
          <h4 className="font-bold text-xl text-primary">Request Samples</h4>
          <p className="text-[18px] text-white py-2">
            Request up to 6 complimentary samples at a time
          </p>
        </div>
        <Separator orientation="vertical" />

        <div className="px-10">
          <h4 className="font-bold text-xl text-primary">
            Add Credit Cards or sign up for Credit Key financing
          </h4>
          <p className="text-[18px] text-white py-2">
            Pay with credit card or get instantly approved for third-party financing
          </p>
        </div>
      </div>
      <div className="flex justify-center -mt-4">
        <Link
          className="flex bg-primary justify-between items-center p-3 gap-2 border border-primary  rounded-xl text-white font-semibold text-[16px] leading-5"
          to="/login"
        >
          Sign Up Now{' '}
          <span>
            <ChevronRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Benefits;
