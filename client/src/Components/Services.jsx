import { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

export default function ModernLayout() {
  const [hoveredItem, setHoveredItem] = useState(0);

  const images = [
    "/Images/survey.jpg",
    "/Images/realestate.jpg", 
    "/Images/construction.jpg",
    "/Images/agro.jpg",
  ];

  const listItems = [
    { id: 0, number: "01", text: "Surveying", link: "#" },
    { id: 1, number: "02", text: "Real Estate", link: "#" },
    { id: 2, number: "03", text: "Construction", link: "#" },
    { id: 3, number: "04", text: "Agro", link: "#" },
  ];

  return (
    <div className="mx-auto p-2 md:px-12 md:pb-16">
      <div className="flex flex-col md:flex-row md:items-center md:gap-6">
        {/* Image Section */}
        <div className="w-full md:w-1/2 p-2 md:p-4">
          <div
            className="
              w-full
              md:max-w-[100%] md:h-[5%]      
              md:mx-auto
              overflow-hidden
              shadow-sm
              transition-all duration-300
            "
          >
            <img
              src={images[hoveredItem]}
              alt="Services"
              className="
                object-cover
                w-full
                h-full
                transition-opacity duration-500 ease-in-out
              "
              onError={(e) => (e.target.src = "/placeholder.svg")}
            />
          </div>
        </div>

        {/* Content & Links */}
        <div className="w-full md:w-1/2 md:p-12 space-y-6 md:text-left py-10 font-TT-Commons">
          <div className="font-TT-Commons flex items-center px-4 py-2 bg-gray-700 text-white text-xs font-medium tracking-wider uppercase w-full md:w-[28rem]">
            <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0 font-TT-Commons"></div>
            Discover our services at African Group
          </div>

          <h3 className="text-[1.5rem] md:text-3xl md:pb-4 font-bold text-gray-800 leading-tight tracking-tight font-TT-Commons">
            A discreet adviser that consistently delivers{" "}
            <span className="text-[#248232] font-TT-Commons">quality advice</span> across
            the full transaction life cycle.
          </h3>

          <div className="border-t border-gray-200 my-6 transition-all duration-300"></div>

          <div className="space-y-6">
            {listItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="block"
                onMouseEnter={() => setHoveredItem(item.id)}
              >
                <div className="flex items-center group relative cursor-pointer">
                  <span className="text-sm font-medium text-gray-500 mr-3">
                    {item.number}
                  </span>
                  <span className="text-lg md:text-3xl font-medium text-gray-800 font-TT-Commons
                                   group-hover:text-[#248232]
                                   transition-colors duration-300">
                    {item.text}
                  </span>

                  {/* Arrow Icon */}
                  <div className="absolute -right-2 opacity-0 group-hover:opacity-100
                                  transition-opacity duration-200 flex items-center justify-center">
                    <div className="bg-[#248232] p-5">
                      <GoArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                {item.id < listItems.length - 1 && (
                  <div className="border-t border-gray-200 my-9
                                  transition-all duration-300
                                  group-hover:border-[#248232]"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
