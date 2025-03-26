import React from "react";

const ServicesLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Left column with image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full">
            <img
              src="/placeholder.svg"
              alt="Modern building with blue glass facade"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right column with content */}
        <div className="w-full md:w-1/2 p-6 md:p-12 space-y-6">
          {/* Label button */}
          <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-xs font-medium tracking-wider uppercase">
            Discover our services at DTRE
          </div>

          {/* Heading with blue highlight */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            A discreet adviser that consistently delivers{" "}
            <span className="text-blue-500">quality advice</span> across
            the full transaction life cycle.
          </h2>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* Numbered list */}
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 mr-3">01</span>
              <span className="text-lg font-medium">Industrial & Logistics</span>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 mr-3">02</span>
              <span className="text-lg font-medium">Science & Technology</span>
            </div>

            <div className="border-t border-gray-200"></div>

            <div className="flex items-start">
              <span className="text-sm font-medium text-gray-500 mr-3">03</span>
              <span className="text-lg font-medium text-gray-400">
                Alternative Capital Markets
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;
