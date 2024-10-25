import { Edit } from 'lucide-react';
import { ScrollArea } from '@/components/common/ui/scroll-area';

import { useLocation } from 'react-router-dom';
import { IItems } from '../../admin/tables/ItemsTable';
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState
} from 'react';
import { Address } from './ShippingAddress';
import { ShoppAdressProps } from '@/pages/user/shop-address';

function OrderItems({ items }: ShoppAdressProps) {
  const [myitems, setMyItems] = useState<IItems[]>([]);
  useEffect(() => {
    const storedItems = localStorage.getItem('preferredItems');
    setMyItems(JSON.parse(storedItems || '[]') as IItems[]);
  }, []);

  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      {pathname === '/close-shop' || pathname === '/profile' ? null : (
        <h3 className="font-medium text-[14px]">Order Items({myitems.length})</h3>
      )}
      {pathname === '/shop-payment' ? (
        <div className="md:mt-7 mt-2 rounded-[8px] border md:my-4  p-3 flex justify-between ">
          <div>
            {' '}
            <div className="text-primary font-medium md:font-normal text-sm md:text-[13px]">
              {Address?.lastName}
              <span className="mx-1">{Address?.firstName}</span>
            </div>
            <div className="font-semibold text-[12px]">{Address?.company}</div>
            <div className="font-normal text-[13px] md:text-[12px]">{Address?.address?.street}</div>
            <div className="font-normal text-[13px] md:text-[12px]">
              {' '}
              {Address?.address?.city},{Address?.address?.zipcode}
            </div>
            <div className="font-normal text-[13px] md:text-[12px]">
              {Address?.address?.country}
            </div>
            <div className="text-[13px] md:text-[12px]">
              <span className="text-[#616161]">Tel:</span>
              <span>{Address?.workPhone}</span>
            </div>
            <div>
              <span className="text-[#616161]">Email:</span>
              <span>{Address?.email}</span>
            </div>
          </div>
          <div className="mt-3">
            <Edit className="w-4 h-4 text-primary" />
          </div>
        </div>
      ) : (
        <ScrollArea className="max-h-[160px] ">
          <div
            className={`${pathname === '/close-shop' && 'md:px-5'} flex flex-col gap-2 md:gap-4 my-2 md:my-6  `}
          >
            {items.map(
              (
                item: {
                  productDetails: {
                    name:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                    unitPrice:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined;
                  };
                  quantity:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                },
                index: Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="border flex rounded-[8px] max-h-[90px] items-center  px-5 py-2 justify-between"
                >
                  <div>
                    <h4
                      className={`font-medium text-[13px] ${pathname === '/profile' && 'text-sm'}`}
                    >
                      {item?.productDetails?.name}
                    </h4>
                    <p
                      className={`text-textmuted text-[12px] ${pathname === '/profile' && 'text-[13px]'}`}
                    >
                      {item?.quantity} Bag(s)
                    </p>
                  </div>
                  <div
                    className={`font-semibold text-[12px] ${pathname === '/profile' && 'text-sm'}`}
                  >
                    ${item?.productDetails?.unitPrice}
                  </div>
                </div>
              )
            )}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

export default OrderItems;
