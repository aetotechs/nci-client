import { CouponForm } from '@/components/user/forms/CouponForm';

function Coupon() {
  return (
    <div className="bg-white   mt-4 md:mt-0 md:mx-0 p-5  mb-4 rounded-[8px] ">
      <h3 className="font-semibold text-[15px] pb-2 ">Coupon Code</h3>
      <div>
        <CouponForm />
      </div>
    </div>
  );
}

export default Coupon;
