import React from "react";

const Footer = () => {
  return (
<footer className=" text-white py-4 text-center fixed bottom-0 w-full">      <div className="flex flex-wrap justify-center gap-10">
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Contact Us</a>
        <a href="#" className="hover:text-gray-300">Terms &amp; Conditions</a>
        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
      </div>
      <p className="mt-4">Copyright © 2023 PipelineSales LLC. All rights reserved</p>
    </footer>
  );
};

export default Footer;