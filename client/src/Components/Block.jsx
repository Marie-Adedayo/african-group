const Block = () => {
    return(
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

    )
}
export default Block