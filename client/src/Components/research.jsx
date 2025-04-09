import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // For scroll effects
import { useEffect } from "react";
import Services from "../../Images/Services.webp";

export default function ResearchGrid() {
  const reports = [
    {
      id: 1,
      category: "INDUSTRIAL & LOGISTICS",
      date: "3 SEPTEMBER 2024",
      title: "The Industrial & Logistics Sustainability Handbook",
      image: Services,
      href: "#",
    },
    {
      id: 2,
      category: "MARKET INTELLIGENCE",
      date: "8 AUGUST 2024",
      title: "Science & Technology Report: Golden Triangle - Q2 2024",
      image: Services,
      href: "#",
    },
    {
      id: 3,
      category: "MARKET INTELLIGENCE",
      date: "2 JULY 2024",
      title: "DTRE Big Box Logistics Report - Q2 2024",
      image: Services,
      href: "#",
    },
  ];

  // Scroll animation hooks
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the element is visible

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="bg-[#040f0f] rounded-tl-3xl rounded-tr-3xl md:rounded-tl-4xl"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 1 }} // Animation duration
    >
      {/* Top Section */}
      <div className="sm:px-6 lg:px-8 py-12 text-white mx-auto">
        <motion.div
          className="bg-[#040f0f] p-6 rounded-lg md:flex md:flex-row md:justify-between md:gap-[8rem]"
          initial={{ opacity: 0, x: -50 }} // Slide in from the left
          animate={{ opacity: 1, x: 0 }} // Final position
          transition={{ duration: 0.8 }}
        >
          <div className="md:align-text-top">
            <span className="font-TT-Commons flex items-center px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded uppercase w-[20rem]">
              <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0 font-TT-Commons"></div>
                Market Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 font-TT-Commons">
              <span className="text-[#248232] font-TT-Commons">Research-led</span> and outcome-oriented.
            </h2>
          </div>
          <div>
            <p className="mt-4 text-gray-300 max-w-2xl font-TT-Commons">
              Numbers only ever tell part of the story. Interpretation and conviction inform application.
            </p>
            <p className="mt-4 text-gray-300 max-w-2xl font-TT-Commons">
              We combine unparalleled depth and breadth of market data with our team’s expertise and on-the-ground
              intelligence to deliver competitive advantage to our clients.
            </p>
            <div className="mt-6">
              <motion.a
                href="#"
                className="inline-flex items-center text-[#248232] hover:text-[#248232]"
                whileTap={{ scale: 0.9 }} // Shrink slightly on tap
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }} // Scale and rotate only the arrow
                  transition={{ duration: 0.3 }}
                >
                  <GoArrowUpRight className="h-8 w-8 mr-2 bg-white transition-all duration-500" />
                </motion.div>
                View all
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Research Reports Grid */}
      <div className="pb-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref} // Attach scroll animation reference
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
          initial="hidden"
          animate={controls} // Trigger animation based on scroll
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          {reports.map((report) => (
            <motion.div
              key={report.id}
              className="flex flex-col h-full"
              whileHover={{ scale: 1.05 }} // Slight scale-up on hover
              whileTap={{ scale: 0.95 }} // Slight scale-down on tap
              initial={{ opacity: 0, y: 50 }} // Start below and invisible
              animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
              transition={{ duration: 0.5 }}
            >
              <div className="border-t border-gray-200 pt-4 sm:pt-6"></div>
              <div className="flex flex-col h-full bg-transparent rounded-lg overflow-hidden">
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={report.image || "/placeholder.svg"}
                    alt={report.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg font-TT-Commons"
                  />
                </div>
                <div className="flex flex-col flex-grow p-2 sm:p-4">
                  <div className="flex justify-between items-center text-xs text-gray-300 mb-2 sm:mb-4">
                    <span className="font-medium font-TT-Commons">{report.category}</span>
                    <span>{report.date}</span>
                  </div>
                  <h3 className="font-TT-Commons text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 leading-tight">
                    {report.title}
                  </h3>
                  <div className="mt-auto">
                    <motion.a
                      href={report.href}
                      className="inline-flex items-center justify-center bg-[#248232] hover:bg-[#1e6b28] transition-colors p-2 sm:p-3 rounded-md w-10 h-10"
                      whileTap={{ scale: 0.9 }} // Shrink slightly on tap
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }} // Scale and rotate only the arrow
                        transition={{ duration: 0.3 }}
                      >
                        <GoArrowUpRight className="h-5 w-5 text-white" />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}