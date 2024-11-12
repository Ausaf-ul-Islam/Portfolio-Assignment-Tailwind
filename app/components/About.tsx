import React from "react";
import Image from "next/image"; // For displaying the profile image

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] py-16 px-6 flex flex-col md:flex-row items-center"
    >
      {/* Left Side - Profile Image */}
      <div className="relative w-full md:w-1/3 mb-10 md:mb-0 flex justify-center">
        <Image
          src="/home.jpeg" // Replace with the actual path to your image
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full shadow-xl border-4 border-[#F39C12]"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-2/3 text-center md:text-left md:ml-10">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-[#F39C12]">About Me</h2>

        {/* Section Description */}
        <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto md:mx-0">
          Hello, I'm a passionate frontend developer with a love for creating
          beautiful and responsive web applications. I specialize in JavaScript,
          TypeScript, React, and Next.js. I always strive to improve my skills
          and stay up-to-date with the latest technologies.
        </p>

        {/* Optional Button */}
        <div className="mt-8">
          <button className="bg-[#F39C12] text-white py-3 px-8 rounded-lg hover:bg-[#d49228] transition duration-300">
           Read More 
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
