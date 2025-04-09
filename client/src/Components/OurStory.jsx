const OurStory = () => {
    return (
        <section >
            <div className="w-[99%] h-[1px] mx-2 mb-10 bg-[#248232] font-TT-Commons"></div>
            <div className="font-TT-Commons grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-8  relative px-[0.625rem] md:px-[1.5625rem] lg:px-[3.125rem]">
                <div className="">
                    <img
                        alt="DTRE"
                        sizes="50vw"
                        src="/Images/picture.jpg"
                        className=" inset-0 object-cover"
                    />
                </div>

                <div className="content flex flex-col gap-[2.5rem] text-left">
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

    )
}
export default OurStory