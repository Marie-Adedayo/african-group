/* import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import campaign from "../../Images/campaign.jpg";
import company from "../../Images/company.jpg";


const PeopleCarousel = () => {
  const people = [
    {
      name: "Natalie Barone",
      title: "Partner",
      role: "Head of Operations & Finance",
      image: campaign,
    },
    {
      name: "Jake Huntley",
      title: "Partner",
      role: "Co-Head of Industrial & Logistics Leasing",
      image: company,
    },
    {
      name: "Ben Sleath",
      title: "Partner",
      role: "Co-Head of UK Industrial & Logistics Capital Markets",
      image: "https://example.com/ben.jpg",
    },
    {
      name: "Tom Sarjant",
      title: "Partner",
      role: "Co-Head of UK Industrial & Logistics Capital Markets",
      image: "https://example.com/tom.jpg",
    },
    {
      name: "John Adcock",
      title: "Partner",
      role: "Head of UK Institutional Clients",
      image: "https://example.com/john.jpg",
    },
  ];

  return (
    <section className="relative my-16 md:my-32">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-medium tracking-wide text-gray-700">
          Leadership Team
        </h2>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3, // Show 3 slides on desktop
          },
        }}
        autoplay={{
          delay: 3000, // Autoplay every 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {people.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-white rounded-lg shadow-md">
              <div className="mb-4">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h6 className="text-lg font-semibold text-gray-900">
                  {person.name}
                </h6>
                <p className="text-sm text-gray-600">{person.title}</p>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PeopleCarousel; */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import company from "../../Images/company.jpg";
import campaign from "../../Images/campaign.jpg";
import people from "../../Images/people.jpg";
import picture from "../../Images/picture.jpg";

const teamMembers = [
  { id: 1, name: "Ben Sleath", title: "Partner", role: "Co-Head of UK Industrial & Logistics Capital Markets", image: campaign },
  { id: 2, name: "Tom Sarjant", title: "Partner", role: "Co-Head of UK Industrial & Logistics Capital Markets", image: people },
  { id: 3, name: "John Adcock", title: "Partner", role: "Head of UK Institutional Clients", image: picture },
  { id: 4, name: "Richard", title: "Partner", role: "Co-Head of UK Development", image: company },
  { id: 5, name: "Richard", title: "Partner", role: "Co-Head of UK Development", image: people },
];

export default function LeadershipTeam() {
  return (
    <div className="w-full max-w-full mx-auto px-0 py-12"> {/* Removed padding */}
      <div className="mb-8 text-left pl-8"> {/* Aligned left */}
        <span className="inline-block bg-[#e6f0f5] text-[#2c5282] py-1 px-3 text-sm font-medium tracking-wider">
          LEADERSHIP TEAM
        </span>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16} // Added spacing between images
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3.5 }, // Three full images, two partial images on the sides
          1280: { slidesPerView: 4.5 },
        }}
        className="w-full"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id} className="pb-8">
            <div className="flex flex-col h-full">
              <div className="relative w-full h-[60vh] overflow-hidden"> {/* Reduced image size */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-800 mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

