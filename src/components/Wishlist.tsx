import { IStatus } from '@/App';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

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
  }
];

function Wishlist({ status }: IStatus) {
  return (
    <div className="px-5 my-5 md:my-0 md:px-0">
      <div className="mb-4">
        <h3 className="font-medium text-xl">My WishList</h3>
      </div>
      <div className={'flex flex-col md:grid grid-cols-3 gap-5'}>
        {cards.map((card, index) => {
          const isDisabled =
            card.bagStatus === 'Not Available' &&
            card.sampleStatus === 'Not Available' &&
            status === true;

          return (
            <Link to={`/product/${card.name}`} key={index}>
              <div
                className={` md:w-[272px] h-[252px]  border rounded-[10px] flex flex-col px-2 py-3  bg-white ${
                  isDisabled ? 'border-gray-300 bg-gray-100 text-gray-500' : 'border-primary/30'
                } `}
                style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
              >
                <div className="font-medium flex justify-between  text-sm mb-3 it">
                  {card.name}
                  <span className="mt-1">
                    <img src="/icons/clear.svg" alt="clear" width={15} />
                  </span>
                </div>
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

                <div className=" w-[333px] ">
                  <Button
                    className="rounded-[10px] bg-primary  text-white font-normal text-[15px] w-[316px] md:w-[250px] h-[30px] "
                    disabled={isDisabled}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
