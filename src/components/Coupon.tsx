import { CouponForm } from '@/components/forms/CouponForm';

function Coupon() {
  return (
    <div className="bg-white   mx-5 md:mx-0 p-5  mb-4 rounded-[8px] ">
      <h3 className="font-semibold text-[15px] pb-2 ">Coupon Code</h3>
      <div>
        <CouponForm />
      </div>
    </div>
  );
}

export default Coupon;
