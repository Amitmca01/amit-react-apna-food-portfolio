import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#d1d5db]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="mb-3 md:mb-0">
          © {new Date().getFullYear()} Apna Food. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-500">
            Privacy
          </a>
          <a href="#" className="hover:text-orange-500">
            Terms
          </a>
          <a href="#" className="hover:text-orange-500">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
