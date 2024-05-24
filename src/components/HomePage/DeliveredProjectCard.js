import React from "react";

function DeliveredProjectCard() {
  return (
    <div className="">
      <div className=" relative">
        <div className=" rounded-2xl bg-[#F8F4F4] md:h-[366px] h-52 w-full  md:p-5 p-4 ">
          <div>
            <div className=" md:w-1/2 w-3/4 md:space-y-3 space-y-2">
              <img src="/images/pawziblelogo.svg" />

              <p className="font-medium md:text-3xl text-lg">Pawzible</p>

              <p className="text-xs md:text-lg md:text-start text-justify  text-[#7B7B7B]">
                Best Medical online service.Best Medical online service.Best
                Medical online service.
              </p>
              <button className="hidden md:block px-6 py-2 rounded-3xl border border-black text-xs md:text-base md:mt-2">
                Know More
              </button>
            </div>
          </div>
          <div>
            <div className="absolute top-0 right-5 space-y-5 -mt-20">
              {/* <img src="/images/pawziblemobile3.png" className="h-[600px]" /> */}
              <img src="/images/pawziblemobile1.svg" />
              <img src="/images/pawziblemobile2.svg" />
            </div>{" "}
            <div className="absolute top-0 right-40 space-y-5 ">
              <img src="/images/pawziblemobile2.svg" />
              <img src="/images/pawziblemobile1.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveredProjectCard;
