import { PaymentForm } from '@/components/forms/PaymentForm';

function MakePayment() {
  return (
    <div className=" bg-white p-4 md:px-10 md:pb-10 md:pt-5  flex flex-col rounded-[8px]">
      <div className="flex justify-between">
        <h3 className="font-semibold text-base mb-3">Payment</h3>
      </div>
      <div className="  ">
        <PaymentForm />
      </div>
    </div>
  );
}

export default MakePayment;
