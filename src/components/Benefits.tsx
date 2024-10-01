import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { IStatus } from '@/App';

function Benefits({ status }: IStatus) {
  return (
    <div
      className={`rounded-2xl h-[364px] p-5 md:flex flex-col  items-center bg-benefits md:pt-10 mt-20   ${!status && ' h-max '}`}
    >
      <div className="">
        <h3 className="font-semibold text-center mt-2 mb-4 md:my-0 text-xl md:text-[26px] text-white">
          Exclusive Account Benefits
        </h3>
      </div>
      <div className="flex flex-col md:flex-row md:gap-3 md:mb-5 md:mt-5 md:pt-10 pb-10 md:px-20  ">
        <div className="md:px-10 text-sm font-normal md:text-base">
          <h4 className="md:font-semibold  text-base text-primary">View Live Pricing</h4>
          <p className=" text-white py-2 text-[15px] font-normal">
            Access real-time custom pricing for our full catalog
          </p>
        </div>
        <Separator orientation="vertical" />

        <div className="md:px-10  md:text-base">
          <h4 className="md:font-semibold text-base text-primary">Request Samples</h4>
          <p className=" text-white py-2 text-[15px] font-normal">
            Request up to 6 complimentary samples at a time
          </p>
        </div>
        <Separator orientation="vertical" />

        <div className="md:px-10 font-normal text-[15px] md:text-base">
          <h4 className="md:font-semibold text-base text-primary">
            Add Credit Cards or sign up for Credit Key financing
          </h4>
          <p className=" text-white md:py-2 text-[15px] font-normal">
            Pay with credit card or get instantly approved for third-party financing
          </p>
        </div>
      </div>
      {!status && (
        <div className="flex justify-center mb-5">
          <Link
            className="flex bg-primary justify-between items-center p-3 gap-2 border border-primary  rounded-xl text-white font-semibold text-[14px] leading-5"
            to="/login"
          >
            Sign Up Now{' '}
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Benefits;
