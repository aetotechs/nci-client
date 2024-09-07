import { AddPayementDialog } from '@/components/AddPaymentMethod';
import { EditPaymentDialog } from '@/components/EditPayment';

function PaymentMethods() {
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
        <h3 className="font-medium text-base mb-4">Payment Methods</h3>
      </div>
      <div className="mb-8">
        {PaymentMethods.map((method, index) => (
          <div key={index} className="border rounded-[8px] w-[331px] md:w-[407px] h-[222px] px-5">
            <div className="font-semibold flex justify-between w-full text-[17px] my-3">
              {method.title}
              <span>
                <img src="/icons/clear.svg" alt="clear" width={15} />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-texthighlight">{method.name}</span>
              <span>{method.cardNumber}</span>
            </div>
            <div className="my-3">Expiry:{method.expiryDate}</div>
            <div>
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
