import { FiArrowUpRight } from "react-icons/fi";


const AboutHero = () => {
    return(
        <>
            <div className="bg-[#071a0a] text-[#FCFFFC]">
                {/* Breadcrumb Section */}
                <ul className="flex items-center gap-[0.6875rem] py-[1.0625rem] border-t-[0.0625rem] border-b-[0.0625rem] border-[#FCFFFC] text-[0.625rem] leading-none uppercase">
                    <li>
                    <a href="/" className="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 10" className="w-5 h-5">
                        <path
                            fill="currentColor"
                            d="M0 10V3.35L4 0l4 3.35V10H5.033V5.956H2.967V10H0Z"
                        ></path>
                        </svg>
                    </a>
                    </li>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 6" className="w-3 h-3 ">
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
                <div className="relative bg-[#071a0a] mt-[28rem] flex items-end justify-end p-4">
                    <div className="space-x-4">
                        <div className="group">
                            <a
                                className="flex items-center gap-4 text-lg"
                                href="/about#our-history"
                                target="_self"
                            >
                                <span>Our History</span>
                                <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                            </a>
                            {/* Line under the text */}
                            <div className="w-full h-[1px] mt-2 bg-gray-500 group-hover:bg-[#FCFFFC] transition-all"></div>
                        </div>
                        <div className="group">
                            <a
                                className="flex items-center gap-10 text-lg"
                                href="/about#esg"
                                target="_self"
                            >
                                <span>ESG</span>
                                <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
                            </a>
                            {/* Line under the text */}
                            <div className="w-full h-[1px] mt-2 bg-gray-500 group-hover:bg-[#FCFFFC] transition-all"></div>
                        </div>
                    </div>
                </div>



            </div>
        </>

    )
}
export default AboutHero