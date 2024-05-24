import React from "react";

const data = [
  {
    num: "5+",
    name: "Years of Experience",
  },
  {
    num: "20+",
    name: "Successful Projects Delivered",
  },
  {
    num: "10+",
    name: "Clients",
  },
  {
    num: "10+",
    name: "Countries Served",
  },
];

function Ratings() {
  return (
    <div className="bg-black rounded-2xl md:my-20 md:py-20 md:mx-10 m-5  ">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 text-white p-3 ">
        {data.map((item) => (
          <div className="space-y-2 text-center ">
            <p className="font-bold md:text-5xl text-lg">{item.num}</p>
            <div className="border-b md:w-32 w-20 mx-auto" />
            <p className="font-medium md:text-xl text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ratings;
