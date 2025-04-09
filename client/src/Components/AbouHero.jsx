import { FiArrowUpRight } from "react-icons/fi";


const AboutHero = () => {
    return(
        <>
            <div className="bg-[#006400] text-[#fcfffc] font-TT-Commons">
                {/* Breadcrumb Section */}
                <ul className="flex items-center text-[#fcfffc] gap-[0.6875rem] md:pt-[7rem] md:pb-4 pl-4 border-t-[1px] border-b-[1px] border-[#FCFFFC] text-[10px] leading-none uppercase">
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
                    <li className="">About</li>
                </ul>
                {/* Hero Section */}
                <div className="relative bg-[#006400] mt-[28rem] flex item-center justify-center md:items-end md:justify-end p-4">
                    <div className="space-x-4">
                        <div className="w-full md:w-[400px] group">
                            <a
                                className="flex items-end justify-between group gap-4 text-lg"
                                href="/about#our-history"
                                target="_self"
                            >
                                <span className="group-hover:text-[#071a0a]">Our History</span>
                                <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#fcfffc] group-hover:text-[#071a0a] transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                            </a>
                            {/* Line under the text */}
                            <div className="w-full h-[1px] mt-2 bg-[#fcfffc] group-hover:bg-[#071a0a] transition-all"></div>
                        </div>
                        <div className="w-full md:w-[400px] group">
                            <a
                                className="flex item-end justify-between group text-lg"
                                href="/about#esg"
                                target="_self"
                            >
                                <span className="group-hover:text-[#071a0a] ">ESG</span>
                                <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#fcfffc] group-hover:text-[#071a0a] item-end justify-end transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                            </a>
                            {/* Line under the text */}
                            <div className="w-full h-[1px] mt-2 bg-[#fcfffc] group-hover:bg-[#071a0a] transition-all"></div>
                        </div>
                    </div>
                </div>



            </div>
        </>

    )
}
export default AboutHero