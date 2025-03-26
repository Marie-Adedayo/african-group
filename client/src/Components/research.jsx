import { GoArrowUpRight } from "react-icons/go";

export default function ReportsGrid() {
  const reports = [
    {
      id: 1,
      category: "INDUSTRIAL & LOGISTICS",
      date: "3 SEPTEMBER 2024",
      title: "The Industrial & Logistics Sustainability Handbook",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qIvDWsTVOfzect4wxH7RwyWdlLVTp.png",
      href: "#",
    },
    {
      id: 2,
      category: "MARKET INTELLIGENCE",
      date: "8 AUGUST 2024",
      title: "Science & Technology Report: Golden Triangle - Q2 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qIvDWsTVOfzect4wxH7RwyWdlLVTp.png",
      href: "#",
    },
    {
      id: 3,
      category: "MARKET INTELLIGENCE",
      date: "2 JULY 2024",
      title: "DTRE Big Box Logistics Report - Q2 2024",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4qIvDWsTVOfzect4wxH7RwyWdlLVTp.png",
      href: "#",
    },
  ]

  return (
    <div className="bg-[#0e1a33] py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {reports.map((report) => (
          <div key={report.id} className="flex flex-col h-full">
            {/* Card container */}
            <div className="flex flex-col h-full bg-transparent rounded-lg overflow-hidden">
              {/* Image container with fixed aspect ratio */}
              <div className="relative w-full pt-[56.25%]">
                <img
                  src={report.image || "/placeholder.svg"}
                  alt={report.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content section */}
              <div className="flex flex-col flex-grow p-2 sm:p-4">
                {/* Category and date */}
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2 sm:mb-4">
                  <span className="font-medium">{report.category}</span>
                  <span>{report.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                  {report.title}
                </h3>

                {/* Button */}
                <div className="mt-auto">
                  <a
                    href={report.href}
                    className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors p-2 sm:p-3 rounded-md w-10 h-10"
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
  )
}

