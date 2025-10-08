import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Developer Info */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">
            Developed by Shubhankar Das
          </h3>
          <div className="flex items-center space-x-4 text-gray-300">
            <div className="flex items-center space-x-1">
              <Mail size={18} />
              <span>sbk8838152@gmail.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={18} />
              <span>+91 7630871689</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
