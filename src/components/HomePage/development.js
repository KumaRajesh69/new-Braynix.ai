import React from "react";

function Development() {
  return (
    <div className="bg-violetPrimery">
      <div className="  max-w-xl mx-auto px-4 py-20">
        <div className="flex">
          <div className="w-1/2 flex justify-end">
            <div className="w-[400px] text-white lg:mr-10 space-y-2">
              <p className="text-blue-500">Web Development</p>
              <p className="lg:text-justify text-xs lg:text-base">
                Bring your vision to life with our expert web development
                services. Create a stunning, functional website that showcases
                your brand and drives success.
              </p>
              <p className="text-blue-500">More Details</p>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="md:h-6 h-3 md:w-6 w-3 z-10 bg-blue-600 rounded-full lg:-ml-3 ml md:mt-8 mt-10"></div>
            <div className="md:h-52 h-40 md:w-0 mt-11 border-dotted border-l md:-ml-3 -ml-1.5 border-white "></div>
            <div className="md:h-0.5 md:w-40 w-20 mt-11 border-dotted border-t border-blue-600 "></div>
            <div className=" mt-2.5 sm:mt-0">
              <img src="images/group131119.svg" />
            </div>
          </div>
        </div>
        <div className="flex md:-mt-8">
          <div className="w-1/2 flex justify-end">
            <div className=" -mt-2 md:-mt-0">
              <img src="images/Group131120.svg" />
            </div>
            <div className="flex -mr-[13px] ">
              <div className="h-0.5 md:w-40 w-20 md:mt-11 mt-4 border-dotted border-t border-[#FF3104] "></div>
              <div className="md:h-6 h-3 md:w-6 w-3 bg-[#FF3104] rounded-full md:-ml-3 md:-mr-0 -mr-2  md:mt-8 mt-3 z-10"></div>
              <div className="md:hidden h-52 w-0 mr-2 md:mr-2.5 sm:mr-2  border-dotted border-l  border-white "></div>
            </div>
          </div>
          <div className="w-1/2 flex ">
            <div className="hidden md:block md:h-48 h-40 md:w-0 mt-11 border-dotted border-l  border-white "></div>

            <div className="w-[400px] text-white lg:ml-10 ml-5 space-y-2">
              <p className="text-[#FF3104]">AI and Data Analysis</p>
              <p className="lg:text-justify  text-xs lg:text-base">
                Unlock the potential of your data with our advanced analytics
                services, delivering actionable insights.
              </p>
              <p className="text-red-800">More Details</p>
            </div>
          </div>
        </div>
        <div className="flex -mt-8">
          <div className="w-1/2 flex justify-end">
            <div className="w-[400px] text-white lg:mr-10 space-y-2">
              <p className="text-[#26ACCA]">UI/UX and Graphics Design</p>
              <p className="lg:text-justify text-xs lg:text-base">
                Elevate your brand with our professional UI/UX and graphic
                design services. Create stunning visuals and user-friendly
                experiences for a memorable impact.
              </p>
              <p className="text-[#26ACCA]">More Details</p>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="md:h-6 h-3 md:w-6 w-3 z-10 bg-[#26ACCA] rounded-full lg:-ml-3 ml md:mt-8 mt-10"></div>
            <div className="md:h-52 h-48 md:w-0 mt-11 border-dotted border-l md:-ml-3 -ml-1.5 border-white "></div>
            <div className="md:h-0.5 md:w-40 w-20 mt-11 border-dotted border-t border-blue-600 "></div>
            <div className=" mt-2.5 sm:mt-0">
              <img src="images/group131119.svg" />
            </div>
          </div>
        </div>
        <div className="flex md:-mt-8">
          <div className="w-1/2 flex justify-end">
            <div className=" -mt-4 sm:-mt-0">
              <img src="images/Group131120.svg" />
            </div>
            <div className="flex -mr-3 ">
              <div className="h-0.5 md:w-40 w-20 md:mt-11 mt-1 border-dotted border-t border-[#148BDC]"></div>
              <div className="md:h-6 h-3 md:w-6 w-3 bg-[#148BDC] rounded-full md:-ml-3    md:mt-8 mt z-10"></div>
              {/* <div className="h-52 w-0 mr-2 lg:mr-2.5 sm:mr-2  border-dotted border-l  border-white "></div> */}
            </div>
          </div>
          <div className="w-1/2 flex -mt-5 md:-mt-0">
            <div className="w-[400px] text-white lg:ml-10 ml-5 space-y-2">
              <p className="text-[#148BDC]">Mobile & App Development</p>
              <p className="lg:text-justify  text-xs lg:text-base">
                Build powerful, user-friendly apps for any platform with our
                full-service mobile & app development. Enhance your business
                today.
              </p>
              <p className="text-[#148BDC]">More Details</p>
            </div>
          </div>
        </div>
        {/* <div className="flex">
          <div className="w-1/2 flex justify-end">
            <div className="w-[400px] text-white mr-10 space-y-2">
              <p className="text-blue-500">Web Development</p>
              <p className="lg:text-justify text-xs lg:text-base">
                Bring your vision to life with our expert web development
                services. Create a stunning, functional website that showcases
                your brand and drives success.
              </p>
              <p className="text-blue-500">More Details</p>
            </div>
          </div>
          <div className="w-1/2 flex -mt-10">
            <div className="h-6 w-6 bg-blue-600 rounded-full -ml-3 mt-8"></div>
            <div className="h-40 w-0 mt-11 border-dotted border-l -ml-3 border-blue-600 "></div>
            <div className="h-0.5 w-40 mt-11 border-dotted border-t border-blue-600 "></div>
            <div className=" ">
              <img src="images/group131119.svg" />
            </div>
          </div>
        </div>
        <div className="flex -mt-10">
          <div className="w-1/2 flex justify-end">
            <div className=" ">
              <img src="images/group131119.svg" />
            </div>
            <div className="flex -mr-3">
              <div className="h-0.5 w-40 mt-11 border-dotted border-t border-blue-600 "></div>
              <div className="h-6 w-6 bg-blue-600 rounded-full -ml-3 mt-8"></div>
            </div>
          </div>
          <div className="w-1/2 flex ">
            <div className="w-[400px] text-white ml-10 space-y-2">
              <p className="text-blue-500">Web Development</p>
              <p className="lg:text-justify  text-xs lg:text-base">
                Bring your vision to life with our expert web development
                services. Create a stunning, functional website that showcases
                your brand and drives success.
              </p>
              <p className="text-blue-500">More Details</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Development;
