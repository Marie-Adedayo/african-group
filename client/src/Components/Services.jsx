import { useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";


export default function ModernLayout() {
  const [hoveredItem, setHoveredItem] = useState(0); // Default image index

  const images = ["/Images/Services.webp", 
    "/Images/picture.jpg",
    "https://dtre.com/_next/image?url=https%3A%2F%2Fdtre-com.s3.eu-west-2.amazonaws.com%2Fdtre-com%2FDTRE_Industrial_Services2.jpg&w=750&q=75", 
    "https://dtre.com/_next/image?url=https%3A%2F%2Fdtre-com.s3.eu-west-2.amazonaws.com%2Fdtre-com%2FDTRE_SciTech_Services2.jpg&w=750&q=75"];

  const listItems = [
    { id: 0, number: "01", text: "Surveying", link: "#" },
    { id: 1, number: "02", text: "Real Estate", link: "#" },
    { id: 2, number: "03", text: "Construction", link: "#" },
    { id: 2, number: "03", text: "Agro", link: "#" },
  ];

  return (
    <div className="mx-auto p-2 md:pl-8 md:pr-8 md:pb-8">
      <div className="flex flex-col md:flex-row md:items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="md:w-full ">
            <img
              src={images[hoveredItem]}
              alt="Modern building"
              className="object-cover w-full h-full transition-opacity duration-300"
              onError={(e) => (e.target.src = "/placeholder.svg")}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 md:p-12 space-y-6 md:text-left py-10">
          <div className="flex items-center px-4 py-2 bg-gray-700 text-white text-xs font-medium tracking-wider uppercase w-full md:w-[28rem]">
            <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0"></div>
            Discover our services at African Group
          </div>

          <h3 className="text-[1.5rem] md:text-5xl md:pb-4 font-bold text-gray-800 leading-tight tracking-wide">
            A discreet adviser that consistently delivers <span className="text-[#248232]">quality advice</span> across
            the full transaction life cycle.
          </h3>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Single Div Containing All Links */}
          <div className="space-y-6">
            {listItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="block"
                onMouseEnter={() => setHoveredItem(item.id)}
              >
                <div className="flex items-center text-center group relative cursor-pointer">
                  <span className="text-sm font-medium text-gray-500 mr-3">{item.number}</span>
                  <span className="text-lg md:text-3xl font-medium text-gray-800 group-hover:text-[#248232] transition-colors">
                    {item.text}
                  </span>

                  {/* Arrow Icon with Background */}
                  <div className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="bg-[#248232] p-5">
                      <GoArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Separator Line */}
                {item.id < listItems.length - 1 && <div className="border-t border-gray-200 my-9"></div>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
