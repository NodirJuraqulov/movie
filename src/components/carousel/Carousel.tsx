import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "./styles.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
  if (mainSwiper && thumbsSwiper && !thumbsSwiper.destroyed) {
    mainSwiper.thumbs.swiper = thumbsSwiper;
    mainSwiper.thumbs.init && mainSwiper.thumbs.init();
    mainSwiper.thumbs.update(true);
  }
}, [mainSwiper, thumbsSwiper]);

  return (
    <>
      <Swiper
        onSwiper={setMainSwiper}  
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            maxWidth: "1360px",
            height: "640px",
            borderRadius: "12px",
          } as React.CSSProperties
        }
        loop={false}
        spaceBetween={4}
        navigation={true}
        speed={1500} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2 mt-2"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className="w-full flex justify-center">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={4}
          slidesPerView="auto"
          freeMode={true}
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mb-[50px] mx-auto mt-4"
          style={{ width: "556px"}}
        >
          <SwiperSlide
            style={{ borderRadius: "12px", width: "108px", height: "64px" }}
            className="w-[108px]"
          >
            <img
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ borderRadius: "12px", width: "108px", height: "64px" }}
            className="w-[108px]"
          >
            <img
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ borderRadius: "12px", width: "108px", height: "64px" }}
            className="w-[108px]"
          >
            <img
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ borderRadius: "12px", width: "108px", height: "64px" }}
            className="w-[108px]"
          >
            <img
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ borderRadius: "12px", width: "108px", height: "64px" }}
            className="w-[108px]"
          >
            <img
              className="w-full h-full object-cover"
              style={{ borderRadius: "12px" }}
              src="https://swiperjs.com/demos/images/nature-5.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default React.memo(Carousel);
