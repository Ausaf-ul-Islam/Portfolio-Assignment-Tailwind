import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#152027] to-[#1f2930] text-[#F39C12] py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Ausaf Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
