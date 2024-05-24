import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Ensure Swiper CSS is imported
import CaseStudy from "./CaseStudy";
import DeliveredProjectCard from "./DeliveredProjectCard";

function DeliveryProject() {
  return (
    <div className=" md:mx-20 m-5 ">
      <p className="font-medium md:text-5xl text-lg text-center md:my-10 my-5">
        From the Vault - Delivered Projects
      </p>
      <div className="">
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
          <SwiperSlide className="rounded-2xl ">
            <DeliveredProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <DeliveredProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <DeliveredProjectCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default DeliveryProject;
