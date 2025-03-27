import { GoArrowUpRight } from "react-icons/go";
import people from "../../Images/people.jpg";

export default function PeopleSection() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={people}
            alt="Professional woman smiling at desk"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-[#248232] px-3 py-1 mb-4">
              <div className="w-2 h-2 bg-white mr-2"></div>
              <span className="text-xs text-white uppercase tracking-wide">People</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a365d] leading-tight mb-6">
              We are <span className="text-[#248232]">only as strong</span> as our people, their experiences and their
              network.
            </h2>

            <p className="text-lg sm:text-xl text-[#1a365d] mb-8">
              We are team-driven and individual-focused, with a belief in hiring the best talent and enabling{" "}
              <span className="text-gray-400">them to achieve their potential.</span>
            </p>

            <button className="flex items-center bg-[#248232] hover:bg-[#248232] transition-colors text-white px-4 py-3 rounded">
              <span className="mr-2">Meet the team</span>
              <GoArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

