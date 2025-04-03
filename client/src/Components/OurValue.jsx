const OurValue = () => {
    return(
        <section className="accordion-block bg-[#eef1f5] py-[3.75rem] md:py-[6.5625rem]">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-[0.625rem] md:px-[1.5625rem] lg:px-[3.125rem]">
                <div className="title-block sticky md:top-[1.875rem]">
                <div className="sub-title opacity-100 flex flex-row gap-2">
                    <span><div className="w-2 h-2 mt-2 bg-[#248232]"></div></span>
                    Our Values
                </div>
                <h2 className="text-2xl font-bold h-decor">
                    Upholding standards that define everything we do
                </h2>
                </div>

                <div className="accordion-items">
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div
                        className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] cursor-pointer"
                        onClick={(e) => {
                            const content = e.currentTarget.nextSibling;
                            const icon = e.currentTarget.querySelector('span');
                            content.classList.toggle('max-h-0'); // Transition for height control
                            content.classList.toggle('max-h-[500px]'); // Adjust based on content height
                            icon.classList.toggle('rotate-180');
                        }}
                        >
                        Collaboration
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden transition-transform duration-300">
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                        </div>
                        <div
                        className="item-content text-base max-h-0 overflow-hidden transition-all duration-300"
                        style={{ width: '100%' }} // Ensures consistent width
                        >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                    </div>

                    {/* Repeat accordion-item for other sections */}
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div
                        className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] cursor-pointer"
                        onClick={(e) => {
                            const content = e.currentTarget.nextSibling;
                            const icon = e.currentTarget.querySelector('span');
                            content.classList.toggle('max-h-0');
                            content.classList.toggle('max-h-[500px]');
                            icon.classList.toggle('rotate-180');
                        }}
                        >
                        Dedication
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden transition-transform duration-300">
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                        </div>
                        <div
                        className="item-content text-base max-h-0 overflow-hidden transition-all duration-300"
                        style={{ width: '100%' }}
                        >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                    </div>
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div
                        className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] cursor-pointer"
                        onClick={(e) => {
                            const content = e.currentTarget.nextSibling;
                            const icon = e.currentTarget.querySelector('span');
                            content.classList.toggle('max-h-0');
                            content.classList.toggle('max-h-[500px]');
                            icon.classList.toggle('rotate-180');
                        }}
                        >
                        Integrity
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden transition-transform duration-300">
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                        </div>
                        <div
                        className="item-content text-base max-h-0 overflow-hidden transition-all duration-300"
                        style={{ width: '100%' }}
                        >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                    </div>
                    <div className="accordion-item border-t-[0.0625rem] border-solid border-[rgba(0,0,0,0.2)]">
                        <div
                        className="item-title flex items-center justify-between gap-[0.9375rem] py-[1.5625rem] md:py-[2.375rem] text-lg md:text-[2.3rem] md:leading-[98%] leading-[120%] font-medium not-italic tracking-[-0.02em] cursor-pointer"
                        onClick={(e) => {
                            const content = e.currentTarget.nextSibling;
                            const icon = e.currentTarget.querySelector('span');
                            content.classList.toggle('max-h-0');
                            content.classList.toggle('max-h-[500px]');
                            icon.classList.toggle('rotate-180');
                        }}
                        >
                        Connection
                        <span className="text-xl md:mt-1 md:ml-2 md:block hidden transition-transform duration-300">
                            <ion-icon name="chevron-down"></ion-icon>
                        </span>
                        </div>
                        <div
                        className="item-content text-base max-h-0 overflow-hidden transition-all duration-300"
                        style={{ width: '100%' }}
                        >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        </div>
                    </div>



                
                </div>
            </div>
        </section>

    )
}
export default OurValue