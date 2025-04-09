import { GoArrowUpRight } from "react-icons/go";
import people from "../../Images/people.jpg";

export default function PeopleSection() {
  return (
    <div className="w-full mx-auto p-2.5 py-10 md:px-8">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2 md:p-10 lg:p-16 flex justify-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-[#248232] px-3 py-1 mb-4">
              <div className="w-2 h-2 bg-white mr-2"></div>
              <span className="text-xs text-white uppercase tracking-wide font-TT-Commons">People</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#1a365d] leading-tight mb-6 font-TT-Commons">
              We are <span className="text-[#248232] font-TT-Commons">only as strong</span> as our people, their experiences, and their network.
            </h2>

            <p className="text-lg sm:text-xl text-[#1a365d] mb-8 font-TT-Commons">
              We are team-driven and individual-focused, with a belief in hiring the best talent and enabling{" "}
              <span className="text-gray-400 font-TT-Commons">them to achieve their potential.</span>
            </p>

             <a href="#" className="inline-flex items-center hover:text-[#248232] transition-colors font-TT-Commons">
                <GoArrowUpRight className="h-8 w-8 mr-2 bg-[#248232] text-white" /> Meet the Team
            </a>
          </div>
        </div>

        {/* Left side - Image (second on mobile, first on desktop) */}
        <div className="w-full md:w-1/2">
          <img
            src={people}
            alt="Professional woman smiling at desk"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
