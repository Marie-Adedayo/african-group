import Navbar from "../Components/Navbar/Navbar"
import { FiArrowUpRight } from "react-icons/fi";

const About = () => {
    return(
        <>
            < Navbar/>
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
            <section>
                <div className="w-full min-h-screen relative flex flex-col gap-6 md:gap-14 py-4 md:py-10 px-6 md:px-10">
                    <div className="pl-4 md:pl-20 space-y-6 md:space-y-14">
                        <h1 className="text-lg md:text-[2rem] font-medium not-italic leading-[100%] md:leading-[95%] tracking-[0.02em] md:tracking-[-0.015em]">An increasingly digital world still requires physical spaces to innovate, create and do.</h1>
                        <h1 className="text-lg md:text-[2rem] font-medium not-italic leading-[100%] md:leading-[95%] tracking-[0.02em] md:tracking-[-0.015em]">Real estate needs and expectations might’ve changed, but the challenge remains the same – businesses need clarity and best judgement to connect the ideas, people and places that make them successful.</h1>

                    </div>
                    <div className="grid gap-4 md:gap-12 grid-cols-1 md:grid-cols-3 ">
                        {/* Item 1 */}
                        <div className="w-[400px] flex flex-col gap-32 bg-gray-200 items-start p-4 transform transition-transform rounded-md">
                            <div className="text-7xl font-bold text-[#248232]">03</div>
        
                            <div className=" ">
                                <div className="w-[350px] h-[1px] bg-[#248232]"></div>
                                <div className="text-sm flex flex-row gap-2 "> <span> <div className="w-2 h-2 mt-1.5 bg-[#248232]"></div> </span>UK Offices - London, Cambridge &amp; Manchester</div>
                            </div>
                        </div>
                        
                        {/* Item 2 */}
                        <div className="w-[400px] flex flex-col gap-32 bg-gray-200 items-start p-4 transform transition-transform rounded-md">
                            <div className="text-7xl font-bold text-[#248232]">51</div>
                            <div className=" ">
                                <div className="w-[350px] h-[1px] bg-[#248232]"></div>
                                <div className="text-sm flex flex-row gap-2 "> <span> <div className="w-2 h-2 mt-1.5 bg-[#248232]"></div> </span> People</div>
                            </div>
                            
                        </div>
                        
                        {/* Item 3 */}
                        <div className="w-[400px] flex flex-col gap-32 bg-gray-200 items-start p-4 transform transition-transform rounded-md">
                            <div className="text-7xl font-bold text-[#248232]">02</div>
                         
                            <div className=" ">
                                <div className="w-[350px] h-[1px] bg-[#248232]"></div>
                                <div className="text-sm flex flex-row gap-2 "> <span> <div className="w-2 h-2 mt-1.5 bg-[#248232]"></div> </span> Affiliated European Offices — Milan &amp; Amsterdam</div>
                            </div>
                        </div>
                        </div>

                </div>
            </section>
            <section >
                <div className="w-[99%] h-[1px] mx-2 mb-10 bg-[#248232]"></div>
                <div className="grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-8  relative px-[0.625rem] md:px-[1.5625rem] lg:px-[3.125rem]">
                    <div className="">
                        <img
                            alt="DTRE"
                            sizes="50vw"
                            src="/Images/picture.jpg"
                            className=" inset-0 object-cover"
                        />
                    </div>

                    <div className="content flex flex-col gap-[2.5rem] lg:gap-[6.875rem] text-left">
                        <div className=" w-[100px] opacity-100 flex flex-row bg-gray-300"> <span><div className="w-2 h-2 mt-2 mx-2 bg-[#248232] "></div></span>Our Story</div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">
                            DTRE delivers value to clients by ensuring they get the right value proposition, 
                            helping them decode a complex market and delivering real estate solutions that enable 
                            them to achieve their goals.
                            </h1>
                        </div>

                        <div className="description opacity-100">
                            From global real estate investors to specialist developers, distribution giants to biotech start-ups, DTRE advises the businesses that are driving the economy, creating jobs, and harnessing innovation.<br /><br />
                            Combining our expertise with best-in-class market intelligence and data enables us to build bespoke strategies to achieve our clients’ objectives.
                        </div>
                    </div>
                </div>
            </section>
            <section className="accordion-block bg-[#eef1f5] py-[3.75rem] md:py-[6.5625rem]">
                <div className="wrapper px-[0.625rem] md:px-[1.5625rem] lg:px-[3.125rem]">
                    <div className="title-block sticky md:top-[1.875rem]">
                        <div className="sub-title opacity-100">Our Values</div>
                    <h2 className="text-2xl font-bold h-decor">
                        Upholding standards that define everything we do
                    </h2>
                    </div>
                    <div className="accordion-items">
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] font-style-normal">
                        Collaboration
                        <em>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                            <path
                                fill="currentColor"
                                d="M0 297.579l83.16-83.159 428.841 428.841 428.84-428.841 83.16 83.159-512 512-512-512z"
                            ></path>
                            </svg>
                        </em>
                        </div>
                        <div className="item-content text-base">
                        <p>
                            DTRE’s success is built upon our unique and strategic approach to teamwork, building bespoke teams capable of best servicing our clients. We incentivise collaboration and ensure everyone has a voice and is supported to achieve their potential.
                        </p>
                        </div>
                    </div>
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] font-style-normal">
                        Dedication
                        </div>
                    </div>
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] font-style-normal">
                        Integrity
                        </div>
                    </div>
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] font-style-normal">
                        Connection
                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </>


    )

}
export default About