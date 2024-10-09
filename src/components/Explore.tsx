import { Link, useLocation, useNavigate } from 'react-router-dom';

import { IStatus } from '@/App';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { FetchItems } from '@/lib/api-routes';
import { IItems } from './tables/ItemsTable';
export const truncate = (lotNumber: string) => {
  return lotNumber.length > 10 ? lotNumber.slice(0, 10) + '...' : lotNumber;
};

function Explore({ status }: IStatus) {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});
  const [products, setProducts] = useState<IItems[]>([]);
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(FetchItems);
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          // toast.error('Failed to fetch products', {
          //   style: {
          //     backgroundColor: '#F443361A',
          //     color: '#F44336',
          //     border: '1px solid #F4433680'
          //   }
          // });
        }
      } catch (error) {
        // toast.error('Error fetching products', {
        //   style: {
        //     backgroundColor: '#F443361A',
        //     color: '#F44336',
        //     border: '1px solid #F4433680'
        //   }
        // });
      }
    };

    fetchProducts();
  }, [products]);

  const HandleClick = (name: string) => {
    navigate(`/product/${name}`);
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
      console.log(cartItems);
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
    <div className={`w-full md:mb-[38px]   md:my-0   ${pathname === '/' && ''}`}>
      {pathname === '/' && (
        <div className="flex flex-col md:justify-center md:items-center  my-5 mb-4">
          <h3 className="font-semibold text-xl md:text-[26px] mt-4 md:mt-0 justify-self-start">
            Explore Nile Coffee
          </h3>
          <p className="font-normal text-sm my-2">
            Discover the rich flavors and unique origins of Nile Coffee
          </p>
        </div>
      )}
      <div className={`${pathname === '/coffee-shop' ? 'py-0 md:w-[62vw]     ' : ' md:py-0 '}`}>
        <div
          className={`grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 gap-3 ${pathname === '/' && 'lg:grid-cols-4'} `}>
          {products.map((product, index) => {
            const isDisabled =
              product.stockAvailable === false &&
              product.sampleAvailable === false &&
              status === true;

            return (
              <div
                key={index}
                className={`   border rounded-[10px] flex flex-col   bg-white ${
                  isDisabled ? 'border-gray-300 bg-white text-[#b9bbc6]' : 'border-primary/30'
                } ${pathname === '/coffee-shop' ? 'grow md:max-w-[300px]  px-5 py-2 ' : '  px-5  py-2 md:py-5'}
                  
                  `}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
                <div
                  className={`font-medium text-base mb-3 cursor-pointer `}
                  onClick={() => HandleClick(product.name)}>
                  {product.name}
                </div>
                <div className="font-normal  mb-3 flex gap-1 items-center">
                  <span>
                    <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
                  </span>
                  <span className="font-normal lower-case text-[12px]"> {product.flavor}</span>
                </div>
                <div className="font-normal mb-3">
                  {status && (
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p
                          className={` ${pathname === '/coffee-shop' && 'text-[15px]'} ${isDisabled ? 'text-[#b9bbc6]' : 'text-primary'}`}>
                          ${product.sampleUnitPrice}/lb
                        </p>
                        {product.sampleAvailable !== true && (
                          <Badge
                            variant="outline"
                            className={`bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px] `}>
                            <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                            <p className="text-[#f44336]">Not Available</p>
                          </Badge>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <p
                          className={` ${pathname === '/coffee-shop' && 'text-[15px]'} ${isDisabled ? 'text-[#b9bbc6]' : 'text-primary'}`}>
                          ${product.unitPrice}/bag
                        </p>
                        {product.stockAvailable !== true && (
                          <Badge
                            variant="outline"
                            className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                            <p className="text-[#f44336]">Not Available</p>
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex text-[12px] justify-between mb-4">
                  <p className="font-medium ">{product.wareHouse}</p>
                  <p className="font-normal  text-inactive">{truncate(product.lotNumber)}</p>
                </div>
                {status ? (
                  <div
                    className={`  ${pathname == '/coffee-shop' ? '  flex gap-2   md:flex-row  ' : 'flex flex-col md:flex-row justify-between gap-3'}`}>
                    <Button
                      type="submit"
                      onClick={() => {
                        AddCart(product, product.name);
                      }}
                      className={`rounded-[6px] bg-primary grow  text-white font-medium md:font-normal text-[15px] md:h-[40px] ${pathname == '/coffee-shop' ? 'md:max-h-[30px] h-[38px] text-sm md:text-[12px]' : 'md:max-h-[30px] h-[38px] md:text-[12px] text-sm'} ${isDisabled && 'text-[#585962] bg-primary/20'}`}
                      disabled={isDisabled || addingStates[product.itemId]}>
                      {addingStates[product.itemId] ? 'Adding...' : 'Add to Cart'}
                    </Button>
                    <Button
                      className={`rounded-[6px] shrink md:max-w-[129px]    md:h-[40px] text-primary font-medium md:font-normal text-[15px] bg-white border border-primary  ${pathname == '/coffee-shop' ? 'md:max-h-[30px] h-[38px] text-sm  md:text-[12px]' : 'md:max-h-[30px] h-[38px] text-sm md:tex-[12px]'} ${isDisabled && 'text-[#1d1b20] border-primary/12'}`}
                      disabled={isDisabled}>
                      Request Sample
                    </Button>
                  </div>
                ) : (
                  <Button className=" h-[32px] text-[13px] md:text-[12px] rounded-[6px]  ">
                    <Link to="/login"> Log In To Buy/Sample</Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {pathname === '/' && (
        <div className="flex justify-center my-5 md:my-8">
          <Link
            className="flex justify-between items-center p-3 max-h-[40px]  gap-2 border border-primary rounded-[10px] text-primary font-semibold text-sm leading-5"
            to="/">
            View More
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Explore;
