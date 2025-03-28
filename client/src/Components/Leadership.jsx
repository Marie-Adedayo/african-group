"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import people from "../../Images/people.jpg"
import company from "../../Images/company.jpg"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

export default function LeadershipTeam() {
  const [slidesPerView, setSlidesPerView] = useState(3)

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Jake Huntley",
      title: "Partner",
      role: "Co-Head of Industrial & Logistics Leasing, Advisory & Development",
      image: people,
    },
    {
      id: 2,
      name: "Ben Sleath",
      title: "Partner",
      role: "Co-Head of UK Industrial & Logistics Capital Markets",
      image: people,
    },
    {
      id: 3,
      name: "Tom Sarjant",
      title: "Partner",
      role: "Co-Head of UK Industrial & Logistics Capital Markets",
      image: company,
    },
    {
      id: 4,
      name: "John Adams",
      title: "Partner",
      role: "Head of UK Industrial & Logistics",
      image: company,
    },
  ]

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-block bg-sky-100 px-3 py-1 rounded">
          <span className="text-sky-800 font-medium text-sm tracking-wider">LEADERSHIP TEAM</span>
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="leadership-swiper"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="bg-white rounded-lg overflow-hidden h-full">
              <div className="aspect-[4/5] relative">
                <img src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{member.title}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

