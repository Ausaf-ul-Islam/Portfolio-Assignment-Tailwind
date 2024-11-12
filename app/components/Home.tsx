import React from "react";

import Image from "next/image";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] text-white py-32 px-6"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, Im <span className="text-[#F39C12]">Ausaf Ahmed</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            I am a passionate frontend developer specialized in building
            responsive and modern web applications. I work with JavaScript,
            TypeScript, React, and Next.js to create seamless user experiences.
          </p>
          <div className="mt-8">
            <button className="bg-[#F39C12] text-white py-4 px-6 rounded-lg hover:bg-yellow-600 transition duration-300">
              Download CV
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src="/home.jpeg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-xl border-4 border-[#F39C12]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
