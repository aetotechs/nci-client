import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

function CoffeeJourney() {
  return (
    <div className="hidden md:flex">
      <Swiper
        className=" h-[380px] rounded-[20px] mb-24 "
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        fadeEffect={{
          crossFade: true
        }}
      >
        <SwiperSlide className="bg-slide1 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl  font-bold">Dried Coffee Beans</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide2 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-bold">Protected for Freshness and Quality</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide3 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-bold">Order in Bags</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide4 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-semibold">Request Samples</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide5 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-bold">Roasted Beans</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide6 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-bold">From Beans to Brew</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-slide7 bg-cover">
          <div className="text-overlay flex justify-center items-center h-full">
            <h2 className="text-white text-3xl font-bold">Savor the Taste of Quality</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CoffeeJourney;
