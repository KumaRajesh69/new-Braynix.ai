import React from "react";

function WhatWeActually() {
  return (
    <div>
      <div className="py-5  bg-violetPrimery ">
        <div className=" w-full justify-center items-center flex flex-col px-2">
          <img src="images/services.svg" className="" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-5 space-y-5 ">
            <p className="font-bold lg:text-5xl text-xl text-white">
              What we actually do?
            </p>
            <p className="font-normal text-base text-gray-400 lg:w-4/6 text-center px-5 md:tracking-widest">
              We are a full-service software studio, working with clients to
              define and develop solutions to complex issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeActually;
