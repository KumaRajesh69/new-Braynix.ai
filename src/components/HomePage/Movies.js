import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Ensure Swiper CSS is imported
import CaseStudy from "./CaseStudy";

function Movies() {
  return (
    <div className=" md:mx-20 m-5 md:my-20">
      <p className="font-medium md:text-5xl text-lg text-center md:my-10 my-5">
        We are making bold moves, together
      </p>
      <div>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={50} // Add some space between slides
        >
          <SwiperSlide className="rounded-2xl">
            <CaseStudy />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudy />
          </SwiperSlide>
          <SwiperSlide>
            <CaseStudy />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Movies;
