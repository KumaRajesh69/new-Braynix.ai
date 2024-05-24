import React from "react";

function SliderImages() {
  return (
    <div className="flex">
      {/* {[0, 1, 2].map((item) => ( */}
      <div className="rounded-2xl">
        <img src="images/sl-img.svg" />
        <div className="p-5 bg-gray-800 space-y-3 ">
          <p className="text-white font-medium text-xl">Vitmeds</p>
          <p className="text-gray-300 font-normal text-base">
            Best Medical online service.
          </p>
          <button className="flex items-center space-x-3 hover:translate-x-6 duration-100 transform">
            <img src="images/lbutton.svg" />
            <p className="text-white  font-normal text-base">Explore more</p>
          </button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default SliderImages;
