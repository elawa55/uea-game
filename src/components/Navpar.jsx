import React, { useState } from "react";
import {
  Flame,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
}from "lucide-react";

const Navpar = () => {
  const navLinks = ["Home", "Gallery", "Blogs", "Serves"];
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-linear-to-r   text-white">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-xs cursor-pointer hover:text-gray-200">
          <span className="opacity-70">EG</span>
          <span className="opacity-40">•</span>
          <span className="font-medium">EN</span>
          <span className="opacity-40">•</span>
          <ChevronDown className="w-3 h-3 opacity-70" />
        </div>
      </div>
      <div className="flex items-center space-x-1 bg-teal-900 bg-opacity-30 backdrop-blur-sm py-2.5 px-5 rounded-3xl rounded-tl-none">
        
        <ul className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                onClick={() => setActiveLink(link)}
                className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-2xl rounded-tl-none ${
                  activeLink === link
                    ? "bg-white text-teal-800 shadow-md"
                    : "text-white hover:bg-white hover:bg-opacity-10"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-px h-6 bg-white opacity-30 mx-4"></div>
        <div className="flex items-center space-x-2.5">
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-800 bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-800 bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-800 bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center rounded-md bg-teal-800 bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
          >
            <Instagram size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navpar;