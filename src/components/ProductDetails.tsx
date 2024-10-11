import { Separator } from '@/components/ui/separator';
import Counter from './Counter';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';

import { toast } from 'sonner';

import { Link } from 'react-router-dom';
import { IItems } from './tables/ItemsTable';

interface IProductDetails {
  product: any;
  status: boolean;
}

function ProductDetails({ product, status }: IProductDetails) {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});
  const [quantities, setQuantities] = useState<number[]>(new Array());
  const [preferredItems, setPreferredItems] = useState<IItems[]>([]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantities([newQuantity]);

    setPreferredItems((prevPreferredItems) => {
      const updatedPreferredItems = [{ ...prevPreferredItems[0], quantity: newQuantity }];

      localStorage.setItem('preferredItems', JSON.stringify(updatedPreferredItems));
      return updatedPreferredItems;
    });
  };
  const AddCart = async (product: IItems, productName: string) => {
    setAddingStates((prev) => ({ ...prev, [product.itemId]: true }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

      const existingItemIndex = cartItems.findIndex(
        (item: any) => item.product.itemId === product.itemId
      );
      if (existingItemIndex !== -1) {
        toast.info(`${productName} already exists in your cart.`, {});
        setAddingStates((prev) => ({ ...prev, [product.itemId]: false }));
        return;
      }

      cartItems.push(product);
     
      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      toast.success(
        <div className="flex gap-1 items-center">
          <span>
            <img src="/icons/cartsuccess.svg" alt="cart" />
          </span>
          <span className="font-bold">{productName}</span> has been added to your cart.
        </div>,

        {
          style: {
            background: '#009A681A',

            color: '#009A68',

            border: '1px solid #009A6880'
          }
        }
      );
    } catch (error) {
    } finally {
      setAddingStates((prev) => ({ ...prev, [product.itemId]: false }));
    }
  };

  return (
    <div className=" rounded-[8px] bg-white  md:mx-0 w-[90vw] md:w-full">
      <div className={` px-5 ${!status && 'pb-2'}`}>
        {status ? (
          <div className="flex items-center gap-2 md:pt-4 pt-2 ">
            <h3 className="font-semibold text-xl">$2.83/lb</h3>
            <div className="font-light text-[15px] mt-2">$374/bag</div>
          </div>
        ) : (
          <h3 className="md:text-lg text-base font-medium text-textcolor pt-4">
            Log in to view price
          </h3>
        )}

        <div className="flex flex-col gap-1 my-2 md:my-3">
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Bag Weight</div>
            <div className="font-medium text-[13px] md:text-[15px]">60kg Bag</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">
              Harvest Season
            </div>
            <div className="font-medium text-[13px] md:text-[15px]">2023/24</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Status</div>
            <div className="font-medium text-[13px] md:text-[15px]">Spot</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Lot Number</div>
            <div className="font-medium text-[13px] md:text-[15px]">P611992-2</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Warehouse </div>
            <div className="font-medium text-[13px] md:text-[15px]">Alameda, CA</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">
              Availability
            </div>
            <div>
              <div className="flex justify-end gap-2">
                <h5 className="font-medium text-[13px] md:text-[15px]">Bags</h5>{' '}
                <span className="text-green-500 text-[13px] md:text-[15px]">(Available)</span>
              </div>
              <div className="flex gap-2">
                <h5 className="font-medium text-[13px] md:text-[15px]">Samples</h5>{' '}
                <span className="text-[#f44336] text-[13px] md:text-[15px]">(Not Available)</span>
              </div>
            </div>
          </div>
          {status ? (
            <div>
              <div className="flex flex-col gap-3 md:flex-row my-3    md:justify-between ">
                <Counter
                  className="h-10 md:w-[104px] w-[40vw] mx-auto md:mx-0 text-[15px] rounded-[6px] text-textcolor"
                  onValueChange={(newQuantity) => handleQuantityChange(newQuantity)}
                />
                <Button
                  className="h-10 md:w-[157px] bg-primary text-white font-medium text-sm"
                  onClick={() => {
                    AddCart(product.itemId, product.name);
                  }}>
                  {addingStates[product.itemId] ? 'Adding...' : 'Add to Cart'}
                </Button>
                <Button className="h-10 md:w-[157px] bg-white text-primary font-medium text-sm border border-primary">
                  Request Sample
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Button className="w-full my-2">
                <Link to="/login">Log In To Buy/ Sample</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      {status && (
        <>
          <div className="w-full my-4">
            <Separator />
          </div>
          <div className="text-textcolor flex items-center gap-2 pb-4 px-5">
            <Bookmark className="h-4 w-4" />
            <span className="font-normal text-[13px]">Save item for later</span>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
