import { PaymentForm } from './forms/PaymentForm';

function MakePayment() {
  return (
    <div className="w-[714px] h-[570px] bg-white px-10 py-5  flex flex-col rounded-[8px]">
      <div className="flex justify-between">
        <h3 className="font-semibold text-2xl mb-3">Payment</h3>
      </div>
      <div className="  ">
        <PaymentForm />
      </div>
    </div>
  );
}

export default MakePayment;
