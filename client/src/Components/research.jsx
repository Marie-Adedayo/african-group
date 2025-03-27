import { GoArrowUpRight } from "react-icons/go";
import Services from "../../Images/Services.webp";

export default function ResearchGrid() {
  const reports = [
    {
      id: 1,
      category: "INDUSTRIAL & LOGISTICS",
      date: "3 SEPTEMBER 2024",
      title: "The Industrial & Logistics Sustainability Handbook",
      image: Services,
      href: "#",
    },
    {
      id: 2,
      category: "MARKET INTELLIGENCE",
      date: "8 AUGUST 2024",
      title: "Science & Technology Report: Golden Triangle - Q2 2024",
      image: Services,
      href: "#",
    },
    {
      id: 3,
      category: "MARKET INTELLIGENCE",
      date: "2 JULY 2024",
      title: "DTRE Big Box Logistics Report - Q2 2024",
      image: Services,
      href: "#",
    },
  ]

  return (
    <div className="bg-[#040f0f] min-h-screen md:rounded-tl-4xl">
      {/* Top Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 text-white max-w-7xl mx-auto">
        <div className="bg-[#040f0f] p-6 rounded-lg">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded uppercase">Market Intelligence</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            <span className="text-[#248232]">Research-led</span> and outcome-oriented.
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Numbers only ever tell part of the story. Interpretation and conviction inform application.
            We combine unparalleled depth and breadth of market data with our team’s expertise and on-the-ground intelligence to deliver competitive advantage to our clients.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center text-[#248232] hover:text-[#248232] transition-colors">
              <GoArrowUpRight className="h-5 w-5 mr-2" /> View all
            </a>
          </div>
        </div>
      </div>

      {/* Research Reports Grid */}
      <div className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {reports.map((report) => (
            <div key={report.id} className="flex flex-col h-full">
              <div className="flex flex-col h-full bg-transparent rounded-lg overflow-hidden">
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col flex-grow p-2 sm:p-4">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-2 sm:mb-4">
                    <span className="font-medium">{report.category}</span>
                    <span>{report.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                    {report.title}
                  </h3>
                  <div className="mt-auto">
                    <a
                      href={report.href}
                      className="inline-flex items-center justify-center bg-[#248232] hover:bg-[#248232] transition-colors p-2 sm:p-3 rounded-md w-10 h-10"
                    >
                      <GoArrowUpRight className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
