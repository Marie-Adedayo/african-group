"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import Video1 from "../assets/video1.mp4"
import Video2 from "../assets/video2.mp4"
import Video3 from "../assets/video3.mp4"

const slides = [
  {
    id: 1,
    title: "Empowering precision and accuracy",
    description: "Explore surveying solutions that lay the foundation for success.",
    button: "Click to read",
    videoUrl: Video1,
  },
  {
    id: 2,
    title: "Transforming spaces into dream realities",
    description: "Your partner in visionary real estate development.",
    button: "Click to read",
    videoUrl: Video2,
  },
  {
    id: 3,
    title: "Cultivating progress and harvesting dreams",
    description: "African Group leads the way in innovative agricultural solutions.",
    button: "Click to read",
    videoUrl: Video3,
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className=" w-full h-[90vh] flex flex-col font-TT-Commons ">
      {/* <div className="absolute opacity-10 bg-[#006400] top-0 left-0 w-full h-[90vh] "></div> */}
      {slides.map((slide, index) => (
        <video
          key={slide.id}
          src={slide.videoUrl}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-[90vh] object-cover transition-opacity duration-500 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: -1 }} // Ensure video stays in the background
        ></video>
      ))}
      <div className="absolute w-full h-[90vh] top-0 flex flex-col gap-12 md:gap-20 justify-between items-center text-white pl-3 pt-6 md:pt-16 pb-6 md:pb-10  ">
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
            <SwiperSlide
              key={slide.id}
              className="flex flex-col items-start text-start mt-20 gap-8 md:gap-10"
            >
              <div className="mx-4 md:mx-10  space-y-6">
                <div className="space-y-5">
                  <h1 className="text-4xl md:text-6xl w-[70%] md:w-[600px] font-normal">
                    {slide.title}
                  </h1>
                  <p className="mt-2 text-sm md:text-base w-[70%] md:w-[400px]">{slide.description}</p>
                </div>
                <div className="mt-4 group ">
                  <a href="/" className="flex flex-row gap-2">
                    <button className="flex items-center gap-2 text-sm md:text-lg font-semibold bg-[#040f0f] px-4 py-3 group-hover:bg-[#2ba84a] transition-all duration-300">
                      <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110" />
                    </button>
                    <span className="mt-2">{slide.button}</span> 
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-20 justify-baseline">
              {/* Pagination */}
              <div className=" gap-4 mt-6 ml-4 md:ml-10 hidden md:flex">
              {slides.map((slide, index) => (
                  <div
                  key={slide.id}
                  className="flex flex-col cursor-pointer"
                  onClick={() => swiperRef.current?.slideToLoop(index)}
                  >
                  {/* Progress bar */}
                  <div className="w-40 md:w-[20rem] h-1 bg-[#85c485] rounded-full overflow-hidden">
                      <div
                      className={`h-full bg-[#006400] transition-all duration-[10000ms] ${
                          index === activeIndex ? "w-full" : "w-0"
                      }`}
                      ></div>
                  </div>
                  {/* Slide Number */}
                  <p className="text-xs md:text-sm mt-1">{`0${slide.id}`}</p>
                  {/* Slide Label */}
                  <div
                      className={`text-xs md:text-sm ${
                      index === activeIndex
                          ? "font-bold text-white"
                          : "text-gray-400"
                      }`}
                  >
                      {slide.title}
                  </div>
                  </div>
              ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-6 mt-96 md:mt-4 items-baseline md:item-end">
              <button
                  className="prev p-2 bg-transparent border-2 rounded-full hover:bg-gray-700"
                  onClick={() => swiperRef.current?.slidePrev()}
              >
                  <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                  className="next p-2 bg-transparent border-2 rounded-full hover:bg-gray-700"
                  onClick={() => swiperRef.current?.slideNext()}
              >
                  <ChevronRight className="w-6 h-6 text-white" />
              </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
