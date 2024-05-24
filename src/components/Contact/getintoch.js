import React from "react";

function GetInToch() {
  return (
    <div className="bg-violetPrimery">
      <div className="bg-violetPrimery bg-getintoch-bg bg-cover lg:mx-20 mx-5 p-5 lg:p-20">
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-5 md:space-y-5">
          <div className="lg:w-1/2 flex justify-center items-center mt-5 md:mt-0">
            <form className=" space-y-5   ">
              <p className="text-white font-bold lg:text-5xl text-center md:text-start text-3xl">
                Get in <span className="text-blue-400  ">Touch</span>
              </p>
              <p className="text-white lg:text-sm text-xs text-center md:text-start leading-6">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <div className="space-y-5">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name *"
                  class="w-full px-3 py-2 bg-transparent placeholder:text-sm   text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                  class="w-full px-3 py-2 bg-transparent placeholder:text-sm  text-white border border-white focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Phone number  *"
                  class="w-full px-3 py-2 bg-transparent placeholder:text-sm  text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Message"
                  class="w-full px-3 py-2 bg-transparent placeholder:text-sm  text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  class="w-full bg-[#2E4289] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 uppercase"
                >
                  send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 flex justify-end ">
            <img src="images/locatonimg.svg" />
          </div>
        </div>
        <div className="">
          <div className="flex md:flex-row flex-col md:space-x-5  space-y-5 mt-5 md:mt-0">
            <div className="flex space-x-2 mt-5">
              <img src="images/cphone.svg" className="self-start" />
              <div className="">
                <p className="text-blue-500 font-semibold text-base">PHONE </p>
                <p className="text-white font-normal text-sm">8249262771</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <img src="images/cmail.svg" className="self-start" />
              <div className="">
                <p className="text-blue-500 font-semibold text-base">EMAIL</p>
                <p className="text-white font-normal text-sm">
                  operations@braynixai.com{" "}
                </p>
              </div>
            </div>
            <div className="flex space-x-2 ">
              <img src="images/chome.svg" className="self-start" />
              <div className="">
                <p className="text-blue-500 font-semibold text-base">Address</p>
                <p className="text-white font-normal text-sm md:w-2/3">
                  Plot no-256/1061,Mahadev nagar, Jharpada, BBSR - 751006{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInToch;
