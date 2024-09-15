import { CouponForm } from '@/components/forms/CouponForm';

function Coupon() {
  return (
    <div className="bg-white h-[156px] w-[90vw ] mx-5 p-2 md:w-[491px] mb-4 md:px-10 rounded-[8px] ">
      <h3 className="font-semibold text-[22px] py-5">Coupon Code</h3>
      <div>
        <CouponForm />
      </div>
    </div>
  );
}

export default Coupon;
