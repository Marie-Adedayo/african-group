import { Link } from "react-router-dom";

export default function AboutStats() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-30">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6 md:text-left ">
          <div className="flex items-center">
            <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0"></div>
            <span className="text-[0.89rem] sm:text-sm text-gray-600 uppercase tracking-wide font-TT-Commons">
              Operating across the Nigeria and Abroad
            </span>
          </div>

          <h2 className="font-TT-Commons text-[1.9rem] sm:text-3xl lg:text-[3rem] font-medium text-[#1a365d] leading-tight -tracking-wider">
            Helping clients navigate a complex market by executing real estate solutions that ensure success.
          </h2>

          {/* <div className="pt-2">
            <button className="flex items-center bg-[#248232] hover:bg-[#248232] transition-colors text-white px-3 py-2 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
              <GoArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
              <span>About African Group</span>
            </button>
          </div> */}
           <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-4 text-inherit text-base font-normal no-underline bg-transparent border-none outline-none shadow-none cursor-pointer appearance-none flex-row-reverse justify-end"
            >
              <span className="text-[1rem] font-TT-Commons">About African Group</span>

              {/* Add group here */}
              <span className="group p-4 bg-[#248232] transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45"
                >
                  <path
                    fill="currentColor"
                    d="M803.729 129.203h-666.868v-129.203h886.846v886.846h-129.203v-665.698l-802.851 802.851-91.36-91.361 803.437-803.437z"
                  />
                </svg>
              </span>
            </Link>
          </div>

        </div>

        {/* Right Column - Stats */}
        <div className="space-y-4 sm:space-y-6 mt-6 lg:mt-0 md:text-left font-TT-Commons">
          {/* Stat 1 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-[2.9rem] md:text-7xl sm:text-5xl font-medium text-[#248232] mb-1 sm:mb-2 tracking-tighter align-middle">
              2.7bn<sup className="text-[2.9rem] md:text-7xl sm:text-5xl tracking-tighter align-middle font-TT-Commons">+</sup>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-[0.8rem] sm:text-sm text-gray-600 uppercase tracking-wide font-TT-Commons">
                Of industrial transactions in 2023 - £28.5bn since 2010
              </span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-[2.9rem] md:text-7xl sm:text-5xl font-medium text-[#248232] mb-1 sm:mb-2 tracking-tighter">72m</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-[0.8rem] sm:text-sm text-gray-600 uppercase tracking-wide font-TT-Commons">
                Sq ft + of current industrial and logistics mandates
              </span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-[2.9rem] md:text-7xl sm:text-5xl font-medium text-[#248232] mb-1 sm:mb-2 tracking-tighter">4.3m</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-[0.8rem] sm:text-sm text-gray-600 uppercase tracking-wide font-TT-Commons">
                Sq ft + of current science and technology mandates
              </span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="text-[2.9rem] md:text-7xl sm:text-5xl font-medium text-[#248232] mb-1 sm:mb-2 tracking-tighter">4000 beds</div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-[#248232] mr-2 mt-1.5 flex-shrink-0"></div>
              <span className="text-[0.8rem] sm:text-sm text-gray-600 uppercase tracking-wide font-TT-Commons">
                Current alternative capital markets funding mandates
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

