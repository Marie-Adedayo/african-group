import { FiArrowUpRight } from "react-icons/fi";


const SurveyHero = () => {
    return(
        <>
            <div className="bg-[#071a0a] text-[#FCFFFC]">
                {/* Breadcrumb Section */}
                <ul className="flex items-center gap-[0.6875rem] md:pt-[7rem] md:pb-4 pl-4 border-t-[1px] border-b-[1px] border-[#FCFFFC] text-[10px] leading-none uppercase">
                    <li>
                    <a href="/" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10" className="w-3 h-3">
                        <path
                            fill="currentColor"
                            d="M0 10V3.35L4 0l4 3.35V10H5.033V5.956H2.967V10H0Z"
                        ></path>
                        </svg>
                    </a>
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6" className="w-2.5 h-2.5 ">
                        <path
                        fill="currentColor"
                        d="M2.146 3 0 .854.707.146 3.561 3 .707 5.854 0 5.146 2.146 3Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                    </li>
                    <li className="">Survey</li>
                </ul>
                {/* Hero Section */}
                <div
                    className="relative h-[90vh] overflow-hidden rounded-[0.26438rem] bg-[#FCFFFC] flex flex-col justify-between p-[1.8125rem_1.125rem] text-[#071a0a]"
                   
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] z-[-1]"></div>
                        {/* Content */}
                       <div className="relative z-1 flex flex-col gap-4 p-6">
                          <p className="text-sm tracking-wide uppercase font-medium">Property Search</p>
                          <h1 className="text-2xl md:text-4xl font-bold leading-[1.2] w-[400px]">
                              End-to-end and box-to-box.
                          </h1>
                          

                        </div>
                                            
                    <div className="w-full md:w-[400px] group">
                        <a
                            className="flex item-end justify-between group text-lg"
                            href="/about#esg"
                            target="_self"
                        >
                            <span className=" "> Key Contact</span>
                            <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-[#FCFFFC] item-end justify-end transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                        </a>
                        {/* Line under the text */}
                        <div className="w-full h-[1px] mt-2 bg-gray-500 group-hover:bg-[#FCFFFC] transition-all"></div>
                    </div>
                
                </div>




            </div>
        </>

    )
}
export default SurveyHero