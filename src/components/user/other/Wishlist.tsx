import { IStatus } from '@/App';
import { useNavigate } from 'react-router-dom';
import { Badge } from '../../common/ui/badge';
import { Button } from '../../common/ui/button';
import { X } from 'lucide-react';

const cards = [
  {
    id: 1,
    name: 'Uganda RFA- Sironko Washing Station',
    cards: 'Caramel, Berry, Chocolate',
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
    cards: 'Caramel, Berry, Chocolate',
    lotNumber: 'P37890-1',
    warehouseName: 'Carteret, NJ',
    bagPrice: 374,
    bagStatus: 'Not Available',
    samplePrice: 2.83,
    sampleStatus: 'Not Available'
  },
  {
    id: 3,
    name: 'Uganda RFA- Sironko Washing Station',
    cards: 'Caramel, Berry, Chocolate',
    lotNumber: 'P37890-1',
    warehouseName: 'Carteret, NJ',
    bagPrice: 374,
    bagStatus: 'Not Available',
    samplePrice: 2.83,
    sampleStatus: 'Available'
  }
];

function Wishlist({ user }: IStatus) {
  const navigate = useNavigate();

  const HandleClick = (name: string) => {
    navigate(`/product/${name}`);
  };
  return (
    <div className="px-5 my-5 md:my-0 md:px-0">
      <div className="md:mb-2 mb-4">
        <h3 className="md:font-medium text-[17px] font-semibold md:text-[22px] text-black md:my-0 my-5">
          My WishList
        </h3>
      </div>
      <div className={'flex flex-col md:grid grid-cols-3 gap-5'}>
        {cards.map((card, index) => {
          const isDisabled =
            card.bagStatus === 'Not Available' && card.sampleStatus === 'Not Available';

          return (
            <div
              key={index}
              className={`   border rounded-[10px] flex flex-col   bg-white ${
                isDisabled ? 'border-gray-300  text-[#b9bbc6]' : 'border-primary/30'
              }  'grow md:max-w-[300px]  px-5 py-2 ' }
              
              `}
              style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
            >
              <div className={`font-medium text-base mb-3 cursor-pointer flex justify-between  `}>
                <span onClick={() => HandleClick(card.name)}> {card.name}</span>

                <span>
                  <X className="h-5 w-4" />
                </span>
              </div>
              <div className="font-normal  mb-3 flex gap-1 items-center">
                <span>
                  <img src="/icons/coffee-bean.svg" alt="Coffee Bean" />
                </span>
                <span className="font-normal lower-case text-[12px]"> {card.cards}</span>
              </div>
              <div className="font-normal mb-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <p
                      className={` ${card.sampleStatus === 'Not Available' ? 'text-[#b9bbc6]' : 'text-primary'}  ${isDisabled ? 'text-[#b9bbc6]' : ''}`}
                    >
                      ${card.samplePrice}/lb
                    </p>
                    {card.sampleStatus === 'Not Available' && (
                      <Badge
                        variant="outline"
                        className={`bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px] `}
                      >
                        <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                        <p className="text-[#f44336]">Not Available</p>
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <p
                      className={`${card.bagStatus === 'Not Available' ? 'text-[#b9bbc6]' : 'text-primary'}  ${isDisabled && 'text-[#b9bbc6]'}`}
                    >
                      ${card.bagPrice}/bag
                    </p>
                    {card.bagStatus === 'Not Available' && (
                      <Badge
                        variant="outline"
                        className="bg-badgebackground border-none font-normal flex items-center gap-1 h-[20px] text-[11px] rounded-[7px]"
                      >
                        <div className="h-[5px] w-[5px] rounded-full bg-[#f44336]"></div>
                        <p className="text-[#f44336]">Not Available</p>
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex text-[12px] justify-between mb-4">
                <p className="font-medium ">{card.warehouseName}</p>
                <p className="font-normal  text-inactive">{card.lotNumber}</p>
              </div>

              <div className=" ">
                <Button
                  className={`${isDisabled ? 'text-[#585962] bg-primary/20' : 'bg-primary text-white'} rounded-[5px]    font-normal md:text-[15px] text-sm w-full h-[38px] md:h-[30px] `}
                  disabled={isDisabled}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
