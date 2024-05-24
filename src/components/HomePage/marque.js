import React from "react";
import Marquee from "react-fast-marquee";

const data = [
  {
    image: "images/pawzible.svg",
  },
  {
    image: "images/career.svg",
  },
  {
    image: "images/VITMEDS.svg",
  },
  {
    image: "images/expandable.svg",
  },
  {
    image: "images/voice.svg",
  },
  {
    image: "images/pawzible.svg",
  },
  {
    image: "images/career.svg",
  },
];
function MarqueeBar() {
  return (
    <div className=" py-10 bg-transparent">
      <Marquee>
        <div className="flex space-x-8 bg-transparent bg-opacity-25  ">
          {data.map((item) => (
            <div className="h-10 w-40 py-8 px-2 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
              <img src={item.image} className="h-10" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeBar;
