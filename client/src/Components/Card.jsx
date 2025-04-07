import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const CardWithImage = () => {
  return (
    <div className="bg-[#FCFFFC] p-6 md:p-10">
      <div
        className="relative h-[90vh] overflow-hidden rounded-[0.26438rem] bg-[#071a0a] flex flex-col justify-between p-[1.8125rem_1.125rem] text-[#fafcff]"
   
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] z-[-1]"></div>

        {/* Content */}
        <div className="relative z-1 flex flex-col gap-4 p-6">
          <p className="text-sm tracking-wide uppercase font-medium">Property Search</p>
          <h1 className="text-xl md:text-2xl font-bold leading-[1.2] w-[400px]">
            Whether it’s leasing or capital markets, our team can help you with your search.
          </h1>
          {/* Updated Button */}
          <div className="mt-4 group">
            <a
              href="/search/properties" // Ensure this is the correct URL
              className="text-[#fafffc] text-xl font-light flex flex-row gap-3"
            >
              <span className="flex items-center text-sm text-[#FCFFFC] md:text-lg font-semibold bg-gray-300 px-2 py-1  transition-all duration-300">
                <FiArrowUpRight className="w-4 h-4 md:w-6 md:h-6 transition-all duration-500 group-hover:rotate-45" />
              </span>
              Search Properties
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
