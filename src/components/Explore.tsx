import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { IStatus } from '@/App';

function Explore({ status }: IStatus) {
  const location = useLocation();
  const { pathname } = location;

  const cards = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  return (
    <div className="h-[934px]">
      {pathname !== '/coffee-shop' && (
        <div className="flex justify-center flex-col items-center mb-2">
          <h3 className="font-bold text-[36px] mt-4">Explore Nile Coffee</h3>
          <p className="font-normal text-sm">
            Discover the rich flavors and unique origins of Nile Coffee
          </p>
        </div>
      )}
      <div className={`${pathname === '/coffee-shop' ? 'py-0 ' : 'py-10'}`}>
        <div className={'flex flex-col md:grid grid-cols-3 gap-5'}>
          {cards.map((card, index) => {
            const isDisabled =
              card.bagStatus === 'Not Available' &&
              card.sampleStatus === 'Not Available' &&
              status === true;

            return (
              <Link to={`/product/${card.name}`} key={index}>
                <div
                  className={`  border rounded-[20px] flex flex-col  bg-white ${
                    isDisabled ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-primary/30'
                  } ${
                    pathname === '/coffee-shop'
                      ? 'h-[270px] w-[280px] px-4 py-2'
                      : 'h-[308px] w-[390px] px-8 py-5'
                  }`}
                  style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
                >
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
                              className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]"
                            >
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
                              className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]"
                            >
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
                      className={`  ${pathname == '/coffee-shop' ? ' w-[234px]  flex gap-2 ' : 'flex justify-between w-[333px] gap-3'}`}
                    >
                      <Button
                        className={`rounded-[10px] bg-primary  text-white font-normal text-[15px] w-[168px] h-[45px] ${pathname == '/coffee-shop' && 'h-[30px] w-[160px]'}`}
                        disabled={isDisabled}
                      >
                        Add To Cart
                      </Button>
                      <Button
                        className={`rounded-[10px] w-[168px] h-[45px] text-primary font-normal text-[15px] bg-white border border-primary  ${pathname == '/coffee-shop' && 'h-[30px] w-[121px]  px-4 text-sm'}`}
                        disabled={isDisabled}
                      >
                        Request Sample
                      </Button>
                    </div>
                  ) : (
                    <Button className="py-5 h-[55px] w-[328px] rounded-[10px] my-6 ">
                      Log In To Buy/Sample
                    </Button>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {pathname !== '/coffee-shop' && (
        <div className="flex justify-center">
          <Link
            className="flex justify-between items-center p-3 gap-2 border border-primary rounded-md text-primary font-semibold text-[16px] leading-5"
            to="/"
          >
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
