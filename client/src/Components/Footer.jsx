import React, { useState } from "react";
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
                <Link to="/terms" className="text-sm hover:underline"><FaInstagram /></Link>
                <Link to="/terms" className="text-sm hover:underline"><FaFacebook /></Link>
                <Link to="/terms" className="text-sm hover:underline"><FaTwitter /></Link>
                <Link to="/terms" className="text-sm hover:underline"><FaLinkedin /></Link>
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




