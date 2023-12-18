import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-1 text-center fixed bottom-0 w-full">
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Contact Us</a>
        <a href="#" className="hover:text-gray-300">Terms &amp; Conditions</a>
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
      </div>
      <p className="mt-4">Copyright © 2023 Your Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;