import React from "react";

function ProjectDetails() {
  return (
    <div>
      {" "}
      <div className="p-10  bg-black text-white md: text-center md:text-justify md:px-10 ">
        <div className="grid md:grid-cols-2 gap-10 pt-10">
          <div>
            <img src="/images/vpeople.svg" className="rounded-2xl" />
          </div>
          <div className="md:space-y-8 space-y-3 ">
            <div className="mb-10 md:mb-0">
              <img src="/images/semicolon.svg" />
            </div>
            <div className="md:-ml-4">
              <img src="/images/VITMEDS.svg" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Tincidunt iaculis luctus
              leo in mattis sagittis facilisi adipiscing. Scelerisque
              scelerisque consect.Lorem ipsum dolor sit amet consectetur.
              Tincidunt iaculis luctus leo in mattis sagittis facilisi
              adipiscing. Scelerisque scelerisque consect.
            </p>
            <div>
              <p className="text-[#4484FF]">Aaron Charles Erlan</p>
              <p>Photographer and Civilians</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
