import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeBar from "./marque";

function Welcome() {
  return (
    <div className="bg-violetPrimery bg-hero-bg bg-fixed">
      <div className=" max-w-7xl mx-auto ">
        <div className="justify-center  text-center  space-y-5 py-10">
          <div className="flex justify-center items-center flex-col text-center space-y-5">
            <p className=" font-bold  lg:text-7xl text-xl  text-white  lg:w-[70%] capitalize lg:px-5 px-2 leading-snug">
              Be more <span className=" text-[#4484FF] ">Effective</span>
            </p>
            <p className=" font-bold  lg:text-7xl text-xl  text-white  lg:w-[70%] capitalize lg:px-5 px-2 leading-snug">
              build <span className="text-[#4484FF]">Software</span> with us
            </p>
            <p className="font-normal lg:text-xl text-center  text-sm text-white lg:w-[55%] lg:py-3 px-10 tracking-wider">
              We help you realize your business with application programs that
              suit with your business.
            </p>
          </div>

          <button className=" lg:px-10 lg:py-4 px-4 py-2 text-xs text-white lg:text-base font-semibold bg-[#4484FF] rounded-full hover:scale-125 duration-300 ">
            Know more
          </button>
        </div>
      </div>
      <MarqueeBar />
    </div>
  );
}

export default Welcome;
