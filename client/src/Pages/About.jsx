import Navbar from "../Components/Navbar/Navbar"

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
            <div className="relative items-baseline flex flex-col mt-[30rem] justify-end pt-[var(--top-offset)] pb-[3.125rem] min-h-[var(--screen-height)] lg:flex-row lg:gap-[2.5rem] lg:justify-between lg:items-end lg:pb-[5.625rem]">
                <h2 className="text-2xl font-bold"> </h2>
                <div className="space-x-4">
                    <a
                        className="text-lg underline "
                        href="/about#our-history"
                        target="_self"
                    >
                        <span>Our History</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-4 h-4">
                        <path
                            fill="currentColor"
                            d="M803.729 129.203h-666.868v-129.203h886.846v886.846h-129.203v-665.698l-802.851 802.851-91.36-91.361 803.437-803.437z"
                        ></path>
                        </svg>
                    </a>
                    <a
                        className="text-lg underline "
                        href="/about#esg"
                        target="_self"
                    >
                        <span>ESG</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-4 h-4">
                        <path
                            fill="currentColor"
                            d="M803.729 129.203h-666.868v-129.203h886.846v886.846h-129.203v-665.698l-802.851 802.851-91.36-91.361 803.437-803.437z"
                        ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        </>


    )

}
export default About