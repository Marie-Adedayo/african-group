import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FiArrowUpRight } from "react-icons/fi";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            {/* Main Nav Item */}
            <h1
              className=" py-0 md:py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* Mobile Icon */}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              {/* Desktop Icon */}
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {/* Desktop Dropdown */}
            {link.submenu && link.sublinks && (
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block w-full left-0 z-50">
                <div className="grid grid-cols-2 p-6 bg-white">
                  {/* First Section */}
                  <div className=" flex flex-col space-y-6">
                    <h1 className="text-5xl text-[#071a0a] font-bold">{link.name}</h1>
                    <p className="text-gray-700 text-sm w-[300px]">{link.description}</p>
                    <div className="mt-4 group ">
                      <a href="/about" className="flex flex-row gap-2">
                        <button className="flex items-center gap-2 text-sm md:text-lg font-semibold bg-[#040f0f] px-4 py-2 group-hover:bg-[#2ba84a] transition-all duration-300">
                          <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110" />
                        </button>
                        <span className="mt-2 text-[#071a0a]">View All</span> 
                      </a>
                    </div>
                  </div>


                  {/* Second Section */}
                  <div className=" grid grid-cols-2 gap-4">
                    {link.sublinks.map((sublink) => (
                      <div
                        key={sublink.Head}
                        className="bg-[#dce4dc] text-[#071a0a] px-8 py-6 hover:bg-[#071a0a] hover:text-[#FCFFFC]"
                      >
                        <h2 className="text-lg font-semibold">{sublink.Head}</h2>
                        <p className="text-sm  mt-2">
                          {sublink.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Dropdown */}
          <div
            className={`${
              heading === link.name ? "block md:hidden" : "hidden"
            } `} // Added margin-top for mobile links
          >
            {link.submenu &&
              link.sublinks &&
              link.sublinks.map((sublink) => (
                <div key={sublink.Head}>
                  <h1
                    onClick={() =>
                      subHeading !== sublink.Head
                        ? setSubHeading(sublink.Head)
                        : setSubHeading("")
                    }
                    className="font-semibold p-2 flex items-center"
                  >
                    {sublink.Head}

                  </h1>
                  <div
                    className={`${
                      subHeading === sublink.Head ? "block" : "hidden"
                    } pl-10`}
                  >
                    {sublink.sublink &&
                      sublink.sublink.map((item) => (
                        <li key={item.name} className="py-2 text-sm ">
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
