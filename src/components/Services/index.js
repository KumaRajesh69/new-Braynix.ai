import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function ServicePage() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery px-2 bg-wave2-bg bg-cover">
        <div className=" w-full justify-center items-center flex flex-col animate-fade ">
          <img src="images/services.svg" className="px-10 md:px-0 " />
          <div className=" z-10 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">Services</p>
          </div>
          <div className="mt-5">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Service", href: "/service" },
                { name: "AI & Data Analysis", href: "/service" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
