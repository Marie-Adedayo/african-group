import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 rounded-tl-4xl rounded-tr-4xl">
      <div className="container mx-auto py-10 px-5">
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#248232] text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Find us</h4>
              <span>Muti-Oyo House, Beside Abiodun Atiba High School, Kosobo, Oyo, Oyo, Nigeria</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-[#248232]  text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Call us</h4>
              <span>9876543210 0</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelopeOpen className="text-[#248232]  text-3xl" />
            <div>
              <h4 className="text-white text-lg font-semibold">Mail us</h4>
              <span>africangroup@info.com</span>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 py-8">
          {/* Logo & Socials */}
          <div>
            <img src="/Images/logo.jpg" alt="logo" className="mb-4 w-48" />
            <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white bg-[#248232] p-3 rounded-full"><FaFacebookF /></a>
              <a href="#" className="text-white bg-[#248232] p-3 rounded-full"><FaTwitter /></a>
              <a href="#" className="text-white bg-[#248232]  p-3 rounded-full"><FaGooglePlusG /></a>
              <a href="#" className="text-white bg-[#248232]  p-3 rounded-full"><FaLinkedin /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#248232] w-max">Useful Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {["Home", "About", "Services", "Portfolio", "Contact", "Our Services", "Expert Team", "Latest News"].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#248232] ">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-[#248232]  w-max">Subscribe</h3>
            <p className="text-sm mb-4">Don’t miss to subscribe to our new feeds.</p>
            <form className="relative">
              <input type="text" placeholder="Email Address" className="w-full p-3 bg-gray-800 border border-gray-700 text-white" />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#248232] "><FaTelegramPlane className="text-white" /></button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto items-center text-sm text-center">
          <p className="items-center text-center">© 2025, All Rights Reserved <a href="#" className="text-[#248232] ">McYounitech</a></p>
         {/*  <ul className="flex space-x-4">
            {["Home", "Terms", "Privacy", "Policy", "Contact"].map((item) => (
              <li key={item}><a href="#" className="hover:text-[#248232]">{item}</a></li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
