import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import company from "../../Images/company.jpg";
import picture from "../../Images/picture.jpg";

const History = () => {
  const slidesData = [
    {
      image: company,
      date: "April 10, 2025",
      text: "This is a brief description for slide 1.",
    },
    {
      image: picture,
      date: "April 11, 2025",
      text: "This is a brief description for slide 2.",
    },
    {
      image: company,
      date: "April 10, 2025",
      text: "This is a brief description for slide 1.",
    },
    {
      image: picture,
      date: "April 11, 2025",
      text: "This is a brief description for slide 2.",
    },
    {
      image: company,
      date: "April 10, 2025",
      text: "This is a brief description for slide 1.",
    },
    {
      image: picture,
      date: "April 11, 2025",
      text: "This is a brief description for slide 2.",
    },
    {
      image: company,
      date: "April 10, 2025",
      text: "This is a brief description for slide 1.",
    },
    {
      image: picture,
      date: "April 11, 2025",
      text: "This is a brief description for slide 2.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="font-TT-Commons h-[85vh] flex flex-col gap-4 md:gap-10 bg-[#071a0a] text-[#FCFFFC] px-2 py-10 overflow-hidden">
        {/* First Part: Title and Navigation */}
        <div className="flex flex-col md:flex-row justify-between px-4 py-8 md:px-8 items-center">
          <div className="text-left">
            <div className="sub-title flex flex-row gap-2 items-center">
              <div className="w-2 h-2 bg-[#248232]"></div>
              <span>Our History</span>
            </div>
            <h1 className="text-3xl font-bold max-w-xl">
              A growth story reflecting the transformational evolution of real estate
            </h1>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="prev-button text-xl rounded-full border-[1px] border-[#f1f1f1] px-3 py-2 hover:border-[#FCFFFC]">
              ←
            </button>
            <button className="next-button text-xl rounded-full border-[1px] border-[#f1f1f1] px-3 py-2 hover:border-[#FCFFFC]">
              →
            </button>
          </div>
        </div>
  
        <div className="slider-container w-full h-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
            spaceBetween={5}
            slidesPerView={2} // Default
            breakpoints={{
              768: { slidesPerView: 2 }, // Medium screens
              1024: { slidesPerView: 4 }, // Desktop screens
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className=" flex flex-col justify-center items-center  bg-transparent border-r-[1px] border-gray-300 ">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-[200px] h-[200] md:w-[300px] md:h-[200px] object-cover"
                  />
                  <div className="mt-2 text-start justify-items-start">
                    <div className="text-gray-500 font-medium">{slide.date}</div>
                    <p className="text-base font-light text-gray-700">{slide.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </>
  );
};

export default History;
