import { useRouter } from "next/router";
import React, { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/outline";
// import { XCircleIcon } from "@heroicons/react/24/outline";

const navigation = [
  // {
  //   name: "Home",
  //   href: "/",
  // },
  {
    name: "About Us ",
    // href: "about_us_page",
  },

  {
    name: "Products",
    // href: "product",
  },
  {
    name: "Services",
    // href: "service",
  },
  {
    name: "Career",
    // href: "contact",
  },
  {
    name: "Contact Us",
    // href: "research",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function AppBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="bg-black lg:px-14 p-5 ">
        <div className="  flex justify-between items-center ">
          <div className="flex space-x-2 ">
            <a href="/">
              <img
                src="images/Braynixlogo.svg"
                className="h-16 animate-pulse"
              />
            </a>
          </div>

          <div className="flex h-12">
            <div className="hidden  lg:flex justify-center items-center space-x-8  rounded-full px-5 ">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white font-normal text-base  hover:scale-125 duration-300  hover:text-[#4484FF]"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <div className=" flex items-center  -ml-4">
                {/* <div className="border border-white rounded-full p-1 border-l-transparent h-12 w-12">
                  <button className="h-full w-full flex justify-center items-center">
                    <img src="images/phone.svg" className="h-7 w-7  " />
                  </button>
                </div> */}
              </div>
            </div>
          </div>

          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#000E29]">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="absolute top-5 right-0 -mr-10 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full "
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XCircleIcon className="text-white" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-blue-500 text-white"
                              : "text-white hover:bg-blue-600 ",
                            "group flex justify-center items-center px-2 py-2 text-base font-medium rounded-md "
                          )}
                        >
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </Dialog>
          </Transition.Root>

          <button
            type="button"
            className="px-4 text-white  lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
