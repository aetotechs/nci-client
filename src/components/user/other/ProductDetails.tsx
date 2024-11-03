import { Separator } from '@/components/common/ui/separator';
import Counter from './Counter';
import { Button } from '../../common/ui/button';
import { Bookmark } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { IItems } from '../../admin/tables/ItemsTable';
import { ErrorToast, SuccessToast } from '@/components/common/ui/Toasts';
import { IProduct, IProductDetails } from '@/utils/commons/TypeInterfaces';


function ProductDetails({ product, status }: IProductDetails) {
  const [isAdding, setIsAdding] = useState(false);
  const [quantities, setQuantities] = useState<number[]>(new Array());
  const [preferredItems, setPreferredItems] = useState<IItems[]>([]);

  const handleQuantityChange = (newQuantity: number) => {
   // Gona add the logic for increment and decrement here.
  };
  
  const AddCart = async (product: IProduct, productName: string) => {
    setIsAdding(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

      const existingItemIndex = cartItems.findIndex(
        (item: IProduct) => item.itemId === product.itemId
      );
      if (existingItemIndex !== -1) {
        toast.info(`${productName} already exists in your cart.`, {});
        setIsAdding(false);
        return;
      }

      cartItems.push(product);

      localStorage.setItem('cartItems', JSON.stringify(cartItems));

      SuccessToast(
        <div className="flex gap-1 items-center">
          <span>
            <img src="/icons/cartsuccess.svg" alt="cart" />
          </span>
          <span className="font-bold">{productName}</span> has been added to your cart.
        </div>);
    } catch (error) {
      ErrorToast(error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className=" rounded-[8px] bg-white  md:mx-0 md:w-full">
      <div className={` px-5 ${!status && 'pb-2'}`}>
        {status ? (
          <div className="flex items-center gap-2 md:pt-4 pt-2 ">
            <h3 className="font-semibold text-xl">${product?.sampleUnitPrice}/lb</h3>
            <div className="font-light text-[15px] mt-2">${product?.unitPrice}/bag</div>
          </div>
        ) : (
          <h3 className="md:text-lg text-base font-medium text-textcolor pt-4">
            Log in to view price
          </h3>
        )}

        <div className="flex flex-col gap-2 my-2 md:my-3">
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Bag Weight</div>
            <div className="font-medium text-[13px] md:text-sm">60kg Bag</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Harvest Season</div>
            <div className="font-medium text-[13px] md:text-sm">2023/24</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Status</div>
            <div className="font-medium text-[13px] md:text-sm">{product?.status}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Lot Number</div>
            <div className="font-medium text-[13px] md:text-sm">{product?.lotNumber}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Warehouse </div>
            <div className="font-medium text-[13px] md:text-sm">{product?.wareHouse}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-normal text-[13px] md:text-[15px] text-[#585962]">Availability</div>
            <div>
              <div className="flex justify-end gap-2">
                <h5 className="font-medium text-[13px] md:text-[15px]">Bags</h5>{' '}
                <span
                  className={`${product?.stockAvailable ? 'text-green-500 ' : 'text-[#f44336]'} text-[13px] md:text-sm`}
                >
                  {product?.stockAvailable ? '(Available)' : '(Not Available)'}
                </span>
              </div>
              <div className="flex gap-2">
                <h5 className="font-medium text-[13px] md:text-[15px]">Samples</h5>{' '}
                <span
                  className={`${product?.sampleAvailable ? 'text-green-500' : 'text-[#f44336]'}  text-[13px] md:text-sm`}
                >
                  {product?.sampleAvailable ? '(Available)' : '(Not Available)'}
                </span>
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
                    AddCart(product, product.name);
                  }}
                  disabled={isAdding}
                >
                  {isAdding ? 'Adding...' : 'Add to Cart'}
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
