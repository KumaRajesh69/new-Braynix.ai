import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function ContactPage() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/contact.svg" className="h-16 px-5 md:px-0" />
          <div className=" z-10 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold lg:text-5xl text-2xl text-white tracking-wider">
              Contact
            </p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              We will love to here from you.
            </p>
          </div>
          <div className="mt-5">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Contact", href: "/contact" },
                // { name: "AI & Data Analysis", href: "/service" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
