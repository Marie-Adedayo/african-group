import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import campaign from "../../Images/campaign.jpg"
import people from "../../Images/people.jpg"

export default function ModernLayout() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const images = [
    campaign,
    people,
    "/placeholder.svg?height=600&width=800&text=Science",
    "/placeholder.svg?height=600&width=800&text=Capital",
  ];

  const listItems = [
    { id: 1, number: "01", text: "Industrial & Logistics" },
    { id: 2, number: "02", text: "Science & Technology" },
    { id: 3, number: "03", text: "Alternative Capital Markets" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full">
            <img
              src={hoveredItem ? images[hoveredItem] : images[0]}
              alt="Modern building with blue glass facade"
              className="object-cover w-full h-full transition-opacity duration-300"
              onError={(e) => (e.target.src = "/placeholder.svg")}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md:p-12 space-y-6 text-left">
          <div className="inline-block px-4 py-2 bg-[#248232] text-white text-xs font-medium tracking-wider uppercase">
            Discover our services at African Group
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            A discreet adviser that consistently delivers <span className="text-[#248232]">quality advice</span> across
            the full transaction life cycle.
          </h2>

          <div className="border-t border-gray-200 my-6"></div>

          <div className="space-y-6">
            {listItems.map((item) => (
              <div key={item.id}>
                <div
                  className="flex items-start group relative cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <span className="text-sm font-medium text-gray-500 mr-3">{item.number}</span>
                  <span
                    className={`text-lg font-medium ${item.isLighter ? "text-gray-400" : "text-gray-800"} group-hover:text-[#248232] transition-colors`}
                  >
                    {item.text}
                  </span>

                  <div className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="bg-[#248232] p-2 rounded-md">
                      <GoArrowUpRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {item.id < listItems.length && <div className="border-t border-gray-200 my-6"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
