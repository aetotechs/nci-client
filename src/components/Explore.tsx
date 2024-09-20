import { Link, useLocation, useNavigate } from 'react-router-dom';

import { IStatus } from '@/App';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { AddToCart } from '@/lib/api-routes';
import { getAuthUser, getUserToken } from '@/lib/cookie';
import { useState } from 'react';
import { toast } from 'sonner';

function Explore({ status }: IStatus) {
  const [addingStates, setAddingStates] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const cards = [
    {
      id: '1',
      name: 'Uganda RFA- Sironko Washing Station',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Available',
      samplePrice: 2.83,
      sampleStatus: 'Not Available'
    },
    {
      id: '2',
      name: 'Zambia Mafinga Hills Peaberry RFA (2022 Crop)',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Available',
      samplePrice: 2.83,
      sampleStatus: 'Not Available'
    },
    {
      id: '3',
      name: 'Uganda RFA- Sironko Washing Station',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Not Available',
      samplePrice: 2.83,
      sampleStatus: 'Available'
    },
    {
      id: '4',
      name: 'Uganda RFA- Sironko Washing Station',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Available',
      samplePrice: 2.83,
      sampleStatus: 'Available'
    },
    {
      id: '5',
      name: 'Zambia Mafinga Hills Peaberry RFA (2022 Crop)',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Available',
      samplePrice: 2.83,
      sampleStatus: 'Not Available'
    },
    {
      id: '6',
      name: 'Uganda RFA- Sironko Washing Station',
      products: 'Caramel, Berry, Chocolate',
      lotNumber: 'P37890-1',
      warehouseName: 'Carteret, NJ',
      bagPrice: 374,
      bagStatus: 'Not Available',
      samplePrice: 2.83,
      sampleStatus: 'Not Available'
    }
  ];
  const HandleClick = (name: string) => {
    navigate(`/product/${name}`);
  };

  const AddCart = async (productId: string, productName: string) => {
    setAddingStates((prev) => ({ ...prev, [productId]: true }));
    const user = getAuthUser();
    const customerId = user.userId;
    const token = getUserToken();
    console.log(AddToCart);
    const cartData = {
      customerId,
      cartItems: [
        {
          productId,
          quantity: 0
        }
      ]
    };
    try {
      const response = await fetch(AddToCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(cartData)
      });

      if (response.ok) {
        toast.success(
          <div className="flex gap-1 items-center">
            <span>
              <img src="/icons/cartsuccess.svg" alt="cart" />
            </span>
            <span>${productName}</span> has been added to your cart.
          </div>,
          {
            style: {
              background: '#009A681A',

              color: '#009A68',
              border: '1px solid #009A6880'
            }
          }
        );
      } else {
        const error = await response.text();
        toast.error(error, {
          style: {
            backgroundColor: '#F443361A',
            color: '#F44336',
            border: '1px solid #F4433680'
          }
        });
      }
    } catch (error) {
      toast.error('Try Again Later', {
        style: {
          backgroundColor: '#F443361A',
          color: '#FFE6E6',
          border: '1px solid #F4433680'
        }
      });
    } finally {
      setAddingStates((prev) => ({ ...prev, [productId]: false }));
    }
  };
  return (
    <div className="my-10 md:my-0  ">
      {pathname === '/' && (
        <div className="flex justify-center flex-col items-center md:mb-2">
          <h3 className="font-semibold text-xl md:text-[26px] mt-4 md:mt-0">Explore Nile Coffee</h3>
          <p className="font-normal text-sm md:my-4">
            Discover the rich flavors and unique origins of Nile Coffee
          </p>
        </div>
      )}
      <div className={`${pathname === '/coffee-shop' ? 'py-0 ' : 'py-5 md:py-10'}`}>
        <div
          className={` ${pathname === '/origins' ? 'md:grid md:grid-cols-2 gap-7 flex flex-col' : 'flex flex-col md:grid grid-cols-3 gap-5 '}`}>
          {cards.map((card, index) => {
            const isDisabled =
              card.bagStatus === 'Not Available' &&
              card.sampleStatus === 'Not Available' &&
              status === true;

            return (
              <div
                // onClick={() => HandleClick(card.name)}
                key={index}
                className={`  border rounded-[20px] flex flex-col  bg-white ${
                  isDisabled ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-primary/30'
                } ${
                  pathname === '/coffee-shop'
                    ? 'md:h-[270px] md:w-[270px] px-4 py-2'
                    : ' w-[339px] md:w-[390px] px-5 md:px-8 py-2 md:py-5'
                }
                  
                  `}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
                <div className="font-medium text-[18px] mb-3">{card.name}</div>
                <div className="font-normal text-[15px] mb-3 flex gap-1 items-center">
                  <span>
                    <img src="icons/coffee-bean.svg" alt="Coffee Bean" />
                  </span>
                  {card.products}
                </div>
                <div className="font-normal text-[16px] mb-3">
                  {status && (
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <p className="text-primary">${card.samplePrice}/lb</p>
                        {card.sampleStatus !== 'Available' && (
                          <Badge
                            variant="outline"
                            className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-destructive"></div>
                            <p className="text-destructive">{card.sampleStatus}</p>
                          </Badge>
                        )}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-primary">${card.bagPrice}/bag</p>
                        {card.bagStatus !== 'Available' && (
                          <Badge
                            variant="outline"
                            className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]">
                            <div className="h-[5px] w-[5px] rounded-full bg-destructive"></div>
                            <p className="text-destructive">{card.bagStatus}</p>
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between mb-4">
                  <p className="font-medium text-[15px]">{card.warehouseName}</p>
                  <p className="font-normal text-inactive">{card.lotNumber}</p>
                </div>
                {status ? (
                  <div
                    className={`  ${pathname == '/coffee-shop' ? ' w-[234px]  flex flex-col gap-3   md:flex-row md:gap-2 ' : 'flex flex-col md:flex-row justify-between w-[333px] gap-3'}`}>
                    <Button
                      type="submit"
                      onClick={() => {
                        AddCart(card.id, card.name);
                      }}
                      className={`rounded-[10px] bg-primary  text-white font-normal text-[15px] h-10 md:w-[168px] md:h-[40px] ${pathname == '/coffee-shop' && 'h-[45px] w-[293px]  md:w-[168px]'}`}
                      disabled={isDisabled || addingStates[card.id]}>
                      {addingStates[card.id] ? 'Adding...' : 'Add to Cart'}
                    </Button>
                    <Button
                      className={`rounded-[10px] w-[293px] h-10  md:h-[40px] text-primary font-normal text-[15px] bg-white border border-primary  ${pathname === '/origins' || (pathname === '/' && 'md:w-[168px]')}  ${pathname == '/coffee-shop' && 'h-[45px] w-[293px]   md:w-[121px] px-4 text-sm'}`}
                      disabled={isDisabled}>
                      Request Sample
                    </Button>
                  </div>
                ) : (
                  <Button className="py-5 h-10 md:h-10 md:w-full rounded-[10px] my-5 ">
                    <Link to="/login"> Log In To Buy/Sample</Link>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {pathname === '/' && (
        <div className="flex justify-center my-5 md:my-0">
          <Link
            className="flex justify-between items-center p-3 gap-2 border border-primary rounded-md text-primary font-semibold text-[16px] leading-5"
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
