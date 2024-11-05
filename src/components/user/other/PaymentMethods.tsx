import { EditPaymentDialog } from '@/components/user/other/EditPayment';
import { ProfileProps } from '@/pages/user/Profile';
import { AddPayementDialog } from './AddPaymentMethod';

function PaymentMethods({ user }: ProfileProps) {
  const PaymentMethods = [
    {
      title: 'Mastercard',
      name: 'John Smith',
      cardNumber: '******124',
      expiryDate: '09/32'
    }
  ];
  return (
    <div className="px-4 my-5">
      <div>
        <h3 className="md:font-medium text-[17px] font-semibold md:text-[22px] text-black md:my-0 my-5">
          Payment Methods
        </h3>
      </div>
      <div className="mb-8">
        {PaymentMethods.map((method, index) => (
          <div key={index} className="border rounded-[8px] md:w-[25vw] md:py-4 py-2 px-5">
            <div className="md:font-semibold flex justify-between w-full  md:text-[17px] text-[15px] font-medium my-1">
              {method.title}
              <span>
                <img src="/icons/clear.svg" alt="clear" width={15} />
              </span>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-texthighlight">{method.name}</span>
              <span>{method.cardNumber}</span>
            </div>
            <div className="my-2 text-sm">Expiry:{method.expiryDate}</div>
            <div className="mb-2 md:mb-0">
              <EditPaymentDialog />
            </div>
          </div>
        ))}
      </div>
      <AddPayementDialog />
    </div>
  );
}

export default PaymentMethods;
