import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import newsData from "../Data/News";

export default function NewsSection() {
  return (
    <motion.section
      className="bg-gray-100/80 px-6 md:px-12 py-10"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Final state
      transition={{ duration: 1 }} // Animation duration
    >
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block bg-blue-100 px-3 py-1 mb-4 font-TT-Commons">
          <motion.span
            className="text-[#248232] text-xs font-medium uppercase tracking-wide font-TT-Commons"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Company News
          </motion.span>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-TT-Commons">
          <motion.h2
            className="text-[#1e2a4a] text-3xl md:text-4xl lg:text-5xl font-bold font-TT-Commons"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Latest News
          </motion.h2>
          <motion.a
            href="/news"
            className="flex items-center gap-2 bg-[#248232] hover:bg-[#1e6b28] transition-colors text-white px-6 py-3 rounded text-sm md:text-base"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            transition={{ duration: 0.3 }}
          >
            <span className="font-TT-Commons">View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M7 17L17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </motion.a>
        </div>
      </div>

      {/* News Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
        }}
      >
        {Array.isArray(newsData) &&
          newsData.map((newsItem) => (
            <motion.div
              key={newsItem.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
              whileHover={{ scale: 1.05 }} // Hover effect
              whileTap={{ scale: 0.95 }} // Tap effect
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img
                  src={newsItem.imageUrl || "/placeholder.svg"}
                  alt={newsItem.title}
                  className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute font-TT-Commons bottom-0 left-0 bg-[#0f1e4e] text-white text-xs font-semibold uppercase px-2 py-1 m-4 rounded">
                  {newsItem.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2 font-TT-Commons">{newsItem.date}</p>
                <h3 className="text-lg md:text-xl font-bold text-[#1e2a4a] mb-4 font-TT-Commons">{newsItem.title}</h3>
                <motion.a
                  href={`/news/${newsItem.slug}`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-[#248232] hover:bg-[#1e6b28] transition-colors text-white rounded"
                  whileHover={{ scale: 1.2, rotate: 10 }} // Scale and rotate on hover
                  whileTap={{ scale: 0.9 }} // Shrink slightly on tap
                  initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
                  animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M7 17L17 7"></path>
                    <path d="M7 7h10v10"></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </motion.section>
  );
}