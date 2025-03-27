import { GoArrowUpRight } from "react-icons/go";

export default function AboutStats() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 md:text-left">
          <div className="flex sm:items-center">
            <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0"></div>
            <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
              Operating across the Nigeria and Abroad
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a365d] leading-tight ">
            Helping clients navigate a complex market by executing real estate solutions that ensure success.
          </h1>

          <div className="pt-2">
            <button className="flex items-center bg-[#248232] hover:bg-[#248232] transition-colors text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
              <GoArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span>About African Group</span>
            </button>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 mt-6 lg:mt-0 md:text-left">
          {/* Stat 1 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#248232] mb-1 sm:mb-2">
              2.7bn<sup className="text-2xl sm:text-3xl">+</sup>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                Of industrial transactions in 2023 - £28.5bn since 2010
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#248232] mb-1 sm:mb-2">72m</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                Sq ft + of current industrial and logistics mandates
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#248232] mb-1 sm:mb-2">4.3m</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                Sq ft + of current science and technology mandates
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-4xl sm:text-5xl md:text-6xl font-light text-[#248232] mb-1 sm:mb-2">4000 beds</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">
                Current alternative capital markets funding mandates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

