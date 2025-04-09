const Overview = () => {
    return (
        <section >
            <div className="w-[99%] h-[1px] mx-2 my-10 bg-[#FCFFFC] font-TT-Commons">
                <div className="font-TT-Commons grid grid-rows-1 md:grid-cols-2 gap-4 md:gap-8  relative px-[0.625rem] md:px-[1.5625rem] lg:px-[3.125rem]">
                    <div className="">
                        <img
                            alt="DTRE"
                            sizes="50vw"
                            src="/Images/company.jpg"
                            className=" inset-0 object-cover"
                        />
                    </div>

                    <div className="content flex flex-col gap-[2.5rem] text-left">
                        <div className=" w-[100px] opacity-100 flex flex-row bg-gray-300"> <span><div className="w-2 h-2 mt-2 mx-2 bg-[#248232] "></div></span>Overview</div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">
                                Today’s supply chains are longer and more complex, as consumer demand for online goods continues to grow.
                            </h1>
                        </div>

                        <div className="description opacity-100">
                            These changes have brought about a global revolution in spatial logistics and a rapid growth in the on-shoring of industrial capabilities. Now, more than ever, businesses need clarity and best judgement to connect the ideas, people and places that make them successful.<br /><br />
                            With full service, end-to-end capabilities, DTRE provides expert advice within the logistics and industrial markets, from development funding, disposals and acquisitions, to leasing and redevelopment.
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Overview