import React from "react";

function Analysis() {
  return (
    <div className="bg-violetPrimery  flex items-center py-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-10 md:mx-20 mx-4">
        <div className="md:w-1/2 flex-1 md:space-y-5 flex flex-col items-center md:items-start mt-10 md:mt-0">
          <p className="text-white font-medium md:text-5xl text-2xl ">
            AI and Data Analysis
          </p>
          <p className="font-normal md:text-base text-xs text-gray-300 md:text-white  md:leading-8 leading-6 text-center md:text-start mt-">
            Unlock the potential of your data with our advanced analytics
            services, delivering actionable insights.
          </p>
          {/* <div className="flex items-center md:hidden mt-5">
            <img src="images/bluecircle.svg" className="absolute h-8 " />
            <p className="text-white text-base font-normal z-10 ml-5">
              Explore more
            </p>
          </div> */}
        </div>
        <div className="md:w-1/2 flex  ">
          <div className="hidden md:block">
            <div className=" flex m-2 relative">
              <img
                src="images/rectangle4238.svg"
                className="absolute -top-10 -left-10 z-0"
              />
              <img
                src="images/proboto.svg"
                className="z-10 mx-auto rounded-xl"
              />
              <img
                src="images/rectangle4239.svg"
                className="absolute z-0 -bottom-10 -right-10"
              />
            </div>
          </div>
          <div className="md:hidden">
            <img src="images/group70624.svg" />
          </div>
        </div>
      </div>
      <div>
        {/* <div className="lg:w-1/2 lg:px-20 px-2 space-y-2">
        <p className="font-medium lg:text-6xl text-3xl text-white">
          AI and Data Analysis
        </p>
        <p className="text-white font-normal text-base w-">
          Unlock the potential of your data with our advanced analytics
          services, delivering actionable insights.
        </p>
      </div>
      <div className="lg:w-1/2 flex ">
        <div className="flex m-2 relative">
          <img
            src="images/circle2.svg"
            className="absolute -top-10 -left-10 z-0 hidden lg:block"
          />
          <img src="images/proboto.svg" className="z-50 mx-auto rounded-xl" />
          <img
            src="images/halfcircle2.svg"
            className="absolute z-0 -bottom-10 -right-10  hidden lg:block"
          />
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Analysis;
