import React from "react";
import Slider from "./slider";
import SliderImages from "./sliderimages";

function Product() {
  return (
    <div className="md:mx-10 m-5 md:mt-28 md:mb-20">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img src="/images/product.svg" />
        </div>
        <div className="md:space-y-10 space-y-4">
          <p>Our Product</p>
          <p className="font-medium md:text-5xl text-xl">
            Unleashing Our Latest Products to the World
          </p>
          <p className="md:w-[80%] text-sm md:text-base">
            We have worked with various kinds of clients from more than 50
            countries around the world and we continue to strive to provide the
            best service
          </p>
          <div>
            {" "}
            <div className="flex">
              <a
                href="/#"
                className="flex justify-between items-center border border-black rounded-full md:px-4 p-2 space-x-4"
              >
                <p className=" md:text-base text-sm font-normal ">Know More</p>
                <img src="images/telegram2.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
