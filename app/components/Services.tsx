import React from "react";
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa"; // Importing icons from react-icons

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] py-16 px-6"
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold text-[#F39C12]">Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Service */}
          <div className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-80">
            <div className="text-6xl text-[#F39C12] mx-auto mb-4">
              <FaCode />
            </div>
            <h3 className="text-2xl font-semibold text-[#F39C12]">
              Web Development
            </h3>
            <p className="mt-4 text-gray-100">
              Building fast, responsive websites using modern frameworks.
            </p>
          </div>

          {/* Mobile Development Service */}
          <div className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-80">
            <div className="text-6xl text-[#F39C12] mx-auto mb-4">
              <FaMobileAlt />
            </div>
            <h3 className="text-2xl font-semibold text-[#F39C12]">
              Mobile Development
            </h3>
            <p className="mt-4 text-gray-100">
              Creating native and cross-platform mobile applications with
              seamless UX.
            </p>
          </div>

          {/* Database Management Service */}
          <div className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-80">
            <div className="text-6xl text-[#F39C12] mx-auto mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-2xl font-semibold text-[#F39C12]">
              Database Management
            </h3>
            <p className="mt-4 text-gray-100">
              Organizing, optimizing, and managing databases for better
              performance and scalability.
            </p>
          </div>

          {/* Add more services as needed */}
        </div>
      </div>
    </section>
  );
};

export default Services;
