import React from "react";

const data = [
  {
    name: "AI services",
    para: "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
  },
  {
    name: "Data Services",
    para: "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
  },
  {
    name: "LLM Integration",
    para: "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
  },
  {
    name: "Enterprise Solutions",
    para: "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
  },
  {
    name: "Technology Consulting",
    para: "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
  },
];

function Clients() {
  return (
    <div className="md:flex justify-between items-center p-5 md:px-20 md:space-x-10 space-y-5 md:space-y-0 my-5 md:my-10">
      <div className="md:w-1/2">
        <div>
          <p className="font-medium md:text-5xl hidden md:block">
            What we actually
          </p>{" "}
          <p className="font-medium md:text-5xl hidden md:block mt-3">
            do to help our clients?
          </p>
          <p className="font-medium md:text-5xl text-lg md:hidden text-center">
            What we actually do to help our clients?
          </p>
        </div>
        <p className="font-medium md:text-xl text-xs text-[#2E2E2EB2] md:mt-5 mt-2 md:w-[90%] text-center md:text-start md:tracking-wide">
          We are a full-service software studio, working with clients to define
          and develop solutions to complex issues working with clients to define
          working with clients to define
        </p>
      </div>
      <div className="md:w-1/2">
        <div className="space-y-5">
          {data.map((item) => (
            <div className="flex space-x-4">
              <div>
                <div className=" h-20 w-20 bg-[#D9D9D9] rounded-2xl" />
              </div>
              <div className="space-y-2">
                <p className="font-medium text-xl">{item.name}</p>
                <p className="text-sm text-[#969696]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
