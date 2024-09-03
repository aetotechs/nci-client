import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Arabica',
    imageUrl: 'images/arabica.png'
  },
  {
    id: 2,
    name: 'Robusta',
    imageUrl: 'images/robusta.png'
  },
  {
    id: 3,
    name: 'Liberica',
    imageUrl: 'images/liberica.png'
  }
];
function Categories() {
  return (
    <>
      <div className="flex flex-col h-[574px] " id="categories">
        <div className="mb-4 flex justify-between">
          <div>
            <h3 className="font-bold leading-[30px] text-2xl">Categories</h3>
            <p className="text-sm">Available Coffee Brands</p>
          </div>
          <div className="flex gap-2">
            <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center  bg-primary/20 ">
              <ChevronLeft />
            </div>
            <div className="rounded-full w-[50px] h-[50px] flex justify-center items-center  bg-primary text-white">
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className="flex gap-10 mb-10 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[390px] h-[338px] rounded-ee-[20px] rounded-ss-[20px] flex justify-center items-center text-white text-2xl font-semibold"
              style={{
                backgroundImage: category.imageUrl
                  ? `linear-gradient(rgba(161, 121, 47, 0.3), rgba(161, 121, 47, 0.3)), url(${category.imageUrl})`
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply'
              }}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            className="flex justify-between items-center p-3 gap-2 border border-primary  rounded-md text-primary font-semibold text-[16px] leading-5"
            to="/"
          >
            View All{' '}
            <span>
              <ChevronRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Categories;
