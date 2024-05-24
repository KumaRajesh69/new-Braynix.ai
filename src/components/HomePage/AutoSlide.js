import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import ProjectDetails from "./ProjectDetails";

// import "./styles.css";

function AutoSlide() {
  return (
    <div>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectDetails />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default AutoSlide;
