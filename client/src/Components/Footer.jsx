import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 rounded-tl-4xl rounded-tr-4xl"
      initial={{ opacity: 0, y: 50 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Final state
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="container mx-auto py-10 px-5">
        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          <motion.div
            className="flex items-center space-x-4"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <FaMapMarkerAlt className="text-[#248232] text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold font-TT-Commons">Find us</h4>
              <span className="font-TT-Commons">Muti-Oyo House, Beside Abiodun Atiba High School, Kosobo, Oyo, Oyo, Nigeria</span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <FaPhone className="text-[#248232] text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold font-TT-Commons">Call us</h4>
              <span className="font-TT-Commons">9876543210 0</span>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4"
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <FaEnvelopeOpen className="text-[#248232] text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold font-TT-Commons">Mail us</h4>
              <span className="font-TT-Commons">africangroup@info.com</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Content */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 py-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, staggerChildren: 0.2 },
            },
          }}
        >
          {/* Logo & Socials */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <img src="/Images/logo.jpg" alt="logo" className="mb-4 w-48" />
            <p className="mb-4 text-sm font-TT-Commons">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaGooglePlusG />, href: "#" },
                { icon: <FaLinkedin />, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-white bg-[#248232] p-3 rounded-full"
                  whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect
                  whileTap={{ scale: 0.9 }} // Tap effect
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#248232] w-max font-TT-Commons">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-2 font-TT-Commons">
              {["Home", "About", "Services", "Portfolio", "Contact", "Our Services", "Expert Team", "Latest News"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#248232]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#248232] w-max font-TT-Commons">Subscribe</h3>
            <p className="text-sm mb-4 font-TT-Commons">Don’t miss to subscribe to our new feeds.</p>
            <form className="relative">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 border border-gray-700 text-white font-TT-Commons"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#248232]">
                <FaTelegramPlane className="text-white" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="bg-gray-800 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto items-center text-sm text-center font-TT-Commons">
          <p className="items-center text-center font-TT-Commons">
            © 2025, All Rights Reserved{" "}
            <a href="#" className="text-[#248232]">
              McYounitech
            </a>
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;