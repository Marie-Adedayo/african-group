import { GoArrowUpRight } from "react-icons/go";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      className="bg-[#040f0f] rounded-tl-3xl rounded-tr-3xl md:rounded-tl-4xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section */}
      <div className="sm:px-6 lg:px-8 py-12 text-white mx-auto">
        <motion.div
          className="bg-[#040f0f] p-6 rounded-lg md:flex md:justify-between md:gap-[8rem]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-TT-Commons flex items-center px-3 py-1 text-xs font-medium bg-gray-700 text-gray-300 rounded uppercase w-[20rem]">
              <div className="bg-[#248232] w-2 h-2 mr-2 flex-shrink-0" />
              Market Intelligence
            </span>
            <h2 className="text-3xl md:text-7xl sm:text-4xl font-bold mt-4 font-TT-Commons">
              <span className="text-[#248232] md:text-7xl font-black font-TT-Commons">Research-led</span>
              <br />
              and outcome-oriented.
            </h2>
          </div>
          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-gray-300 font-TT-Commons">
              Numbers only ever tell part of the story. Interpretation and conviction inform application.
            </p>
            <p className="mt-4 text-gray-300 font-TT-Commons">
              We combine unparalleled depth and breadth of market data with our team’s expertise and on-the-ground intelligence to deliver competitive advantage to our clients.
            </p>
            <div className="mt-6">
              <motion.a
                href="#"
                className="inline-flex items-center text-[#248232]"
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                  <GoArrowUpRight className="h-8 w-8 mr-2 bg-white transition-all duration-500 p-2" />
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
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
          }}
        >
          {reports.map((report, idx) => (
            <motion.div
              key={report.id}
              className={`
                flex flex-col bg-transparent overflow-hidden
                ${idx > 2 ? "border-t border-gray-700" : ""}   /* top line on every row except first */
                ${idx % 3 !== 2 ? "border-r border-gray-700" : ""} /* vertical lines between columns */
              `}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Card Content */}
              <div className="w-100% h-0.5 bg-white mb-8"></div>
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 container */}
                <motion.img
                  src={report.image || "/placeholder.svg"}
                  alt={report.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
                <hr className="bg-white"/>
              <div className="flex flex-col flex-grow p-4">
                <div className="flex justify-between items-center text-xs text-gray-300 mb-2">
                  <span className="font-medium">{report.category}</span>
                  <span>{report.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 leading-tight">
                  {report.title}
                </h3>
                <div className="mt-auto">
                  <motion.a
                    href={report.href}
                    className="inline-flex items-center justify-center bg-[#248232] hover:bg-[#1e6b28] transition-colors p-2 rounded-md"
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ duration: 0.3 }}>
                      <GoArrowUpRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
