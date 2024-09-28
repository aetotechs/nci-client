import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect } from 'react';

const categories = [
  { id: 1, name: 'Arabica', imageUrl: 'images/arabica.png' },
  { id: 2, name: 'Robusta', imageUrl: 'images/robusta.png' },
  { id: 3, name: 'Liberica', imageUrl: 'images/liberica.png' },
  { id: 4, name: 'Excelsa', imageUrl: 'images/excelsa.jpg' }
];

function Categories() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevRef, nextRef]);

  return (
    <>
      <div className="flex flex-col md:h-[574px] " id="categories">
        <div className="mb-4 flex my-5 justify-between items-center">
          <div>
            <h3 className="font-bold leading-[30px] text-[32px]">Categories</h3>
            <p className="text-sm md:my-4">Available Coffee Brands</p>
          </div>

          <div className="relative flex gap-2">
            <div
              ref={prevRef}
              className="   z-10 rounded-full w-[50px] h-[50px] flex justify-center items-center bg-primary/20 cursor-pointer"
            >
              <ChevronLeft />
            </div>
            <div
              ref={nextRef}
              className="   z-10 rounded-full w-[50px] h-[50px] flex justify-center items-center bg-primary text-white cursor-pointer"
            >
              <ChevronRight />
            </div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div
                className=" h-[338px] rounded-ee-[20px] rounded-ss-[20px] flex justify-center items-center text-white text-2xl font-semibold"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Categories;
