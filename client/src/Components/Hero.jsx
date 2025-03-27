"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";

const slides = [
  { id: 1, title: "Trusted advice, actionable insights", description: "Stay ahead with expert opinions and strategies for growth.", button: "Click to read" },
  { id: 2, title: "DTRE 2025 Outlook", description: "An in-depth look at market trends and forecasts for 2025.", button: "Click to read" },
  { id: 3, title: "DTRE Big Box Logistics Report - Q4 2024", description: "Discover the latest logistics data and key takeaways.", button: "Click to read" },

];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="bg-blue-400 relative w-full h-screen flex flex-col gap-10 md:gap-20 items-center text-white">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-col items-center text-center md:items-start md:text-start mt-10">
            <div className="mx-10 md:mx-18">
                <div>
                    <h1 className="text-5xl w-[400px] font-normal">{slide.title}</h1>
                    <p className="mt-2">{slide.description}</p>
                </div>
                <div className="mt-4 group flex flex-row">
                    <a href="">
                        <button className="flex items-center gap-2 text-lg font-semibold bg-blue-600 px-4 py-2  hover:bg-blue-700 transition-all duration-300">
                            <FiArrowUpRight className="w-6 h-6 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110" />
                    
                        </button>
                        {slide.button}
                    </a>
  
                </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-10 mx-10 md:ml-18">
            {/* Pagination */}
            <div className="flex gap-4 mt-6 ml-10 md:ml-18">
                {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className="flex flex-col cursor-pointer"
                    onClick={() => swiperRef.current?.slideToLoop(index)}
                >
                    {/* Progress bar */}
                    <div className="w-[20rem] h-1 bg-gray-600 rounded-full overflow-hidden">
                    <div
                        className={`h-full bg-blue-500 transition-all duration-[5000ms] ${index === activeIndex ? "w-full" : "w-0"}`}
                    ></div>
                    </div>
                    {/* Slide Number */}
                    <p className="text-sm mt-1">{`0${slide.id}`}</p>
                    {/* Slide Label */}
                    <div className={`text-sm ${index === activeIndex ? "font-bold text-white" : "text-gray-400"}`}>
                    {slide.title}
                    </div>
                </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-6 mt-4 item-end">
                <button className="prev p-2 bg-transparent  border-2 rounded-full hover:bg-gray-700" onClick={() => swiperRef.current?.slidePrev()}>
                <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button className="next p-2 bg-transparent border-2 rounded-full hover:bg-gray-700" onClick={() => swiperRef.current?.slideNext()}>
                <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
      </div>

      
    </div>
  );
};

export default Hero;
