import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import OrderItems from './OrderItems';
import { EyeIcon } from 'lucide-react';
import { checkStatus } from './tables/OrdersTable';

const myitems = [
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  },
  {
    name: 'Uganda RFA- Sironko Washing Station',
    subtotal: '$120',

    bags: 1,
    lotNumber: 'P37890-1',
    warehouse: 'Alameda, CA',
    quantity: 20
  }
];

export function ViewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-start md:justify-center -mt-1 md:pl-3 gap-1 md:gap-2 cursor-pointer">
          <EyeIcon className="h-[14px] w-[14px]" />
          <span className="text-[13px] font-normal">View</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-[90%] rounded-[8px] ">
        <DialogHeader>
          <DialogTitle className="font-semibold md:text-xl text-[19px] text-left ">
            Order details{' '}
          </DialogTitle>
        </DialogHeader>{' '}
        <div>
          <div className="flex flex-col gap-1 md:text-[15px] text-sm    ">
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Order Number</p>
              <h3 className="font-medium  text-texthighlight">5493-90</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Date</p>
              <h3 className="font-medium ">Aug 26,2024</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Payment Method</p>
              <h3 className="font-medium ">Mastercard</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Status </p>
              <h3
                className={`font-normal flex items-center gap-1 rounded-[5px] px-2 ${checkStatus('Shipped')} `}
              >
                <div className="h-[6px] w-[6px] rounded-full bg-current"></div>
                Shipped
              </h3>
            </div>
          </div>

          <OrderItems items={myitems} />
          <div className="flex flex-col gap-2 text-sm md:text-[15px]">
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted"> Subtotal</p>
              <h3 className="font-medium ">$120</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Shipping</p>
              <h3 className="font-medium ">$60</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Standard VAT</p>
              <h3 className="font-medium ">$25</h3>
            </div>
            <div className="flex justify-between">
              <p className="font-normal  text-textmuted">Order Total</p>
              <h3 className="font-semibold text-[14px]">$265</h3>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
