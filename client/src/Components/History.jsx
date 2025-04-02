import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
 

const History = () => {
  const slidesData = [
    {

      date: 'April 10, 2025',
      text: 'This is a brief description for slide 1.',
    },
    {

      date: 'April 11, 2025',
      text: 'This is a brief description for slide 2.',
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-10">
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
            <button className="prev-button text-xl rounded-full border-[1px] border-[#FCFFFC] px-4 py-2">
              ←
            </button>
            <button className="next-button text-xl rounded-full border-[1px] border-[#FCFFFC] px-4 py-2">
              →
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: '.next-button', prevEl: '.prev-button' }}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4 md:px-8"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start gap-4 bg-white shadow-md p-6 rounded-lg overflow-hidden">
{/*                 <img
                  src={slide.image} 
                  alt={`Slide ${index + 1}`}
                  className="rounded-md w-full h-48 object-cover"
                /> */}
                <div className="text-gray-500 font-medium">{slide.date}</div>
                <p className="text-base font-light text-gray-700">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default History;
