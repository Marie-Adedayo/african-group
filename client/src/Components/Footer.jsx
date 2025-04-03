/* import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    interests: "",
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prev) => ({ ...prev, privacyPolicy: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
        <footer className="bg-[#040f0f] text-white py-12 px-4 md:px-8 lg:px-12 rounded-tr-3xl rounded-tl-3xl">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Unlock your actionable</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#248232] mb-8">insight today</h2>

            <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label>Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/70 outline-none px-0 py-1"
                />
              </div>
              <div className="space-y-2">
                <label>Name *</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/70 outline-none px-0 py-1"
                />
              </div>
              <div className="space-y-2">
                <label>Areas of interest</label>
                <select
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/70 outline-none px-0 py-1"
                >
                  <option value="">Select an area</option>
                  <option value="research">Research</option>
                  <option value="consulting">Consulting</option>
                  <option value="analytics">Analytics</option>
                  <option value="insights">Insights</option>
                </select>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={formData.privacyPolicy}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 mt-1"
                />
                <label>
                  I agree to the <Link to="/privacy-policy" className="text-[#248232]">Privacy Policy</Link>
                </label>
              </div>
              <button type="submit" className="bg-[#248232] p-3 rounded hover:bg-[#248232]">
                Submit
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Location</h3>
              <p>Muti-Oyo House, Beside Abiodun Atiba High School, Kosobo, Oyo, Oyo, Nigeria</p>
              <p>T: +44 (0) 20 3328 9080</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <p>Real Estate</p>
              <p>Surveying</p>
              <p>Construction</p>
              <p>Agro</p>
              <p>Tech</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Social Media</h3>
                <div className="md:flex gap-2 items-center md:flex-row">
                  <Link to="/terms" className="text-2xl hover:underline"><FaInstagram /></Link>
                  <Link to="/terms" className="text-2xl hover:underline"><FaFacebook /></Link>
                  <Link to="/terms" className="text-2xl hover:underline"><FaTwitter /></Link>
                  <Link to="/terms" className="text-2xl hover:"><FaLinkedin /></Link>
                </div>  
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div>
            <Link to="/privacy" className="text-sm hover:underline ml-4">Privacy Policy</Link>
          </div>
          <div className="text-sm text-gray-400">Copyright 2025 — McYounitech</div>
        </div>
      </div>
    </footer>
  );
}

 */

import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaGooglePlusG, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
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
              <a href="#" className="text-white bg-blue-700 p-3 rounded-full"><FaFacebookF /></a>
              <a href="#" className="text-white bg-blue-400 p-3 rounded-full"><FaTwitter /></a>
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
