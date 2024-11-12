import React from "react";
import Image from "next/image"; // Importing the Image component from Next.js

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-r from-[#1C2B35] to-[#3C4C58] py-16 px-6"
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold text-[#F39C12]">Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div
            className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-70 h-[350px]"
          >
            <Image
              src="/project1.png" // Replace with the actual image path
              alt="Project 1"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg opacity-60 transition-opacity duration-300 ease-in-out"
            />
            <div className="relative z-10 flex flex-col justify-center items-center p-4 h-full">
              <h3 className="text-2xl font-semibold text-[#F39C12]">Project 1</h3>
              <p className="mt-4 text-gray-100 text-center">
                Description of the project goes here. Highlight key features and
                functionalities.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-70 h-[350px]"
          >
            <Image
              src="/project2.png" // Replace with the actual image path
              alt="Project 2"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg opacity-60 transition-opacity duration-300 ease-in-out"
            />
            <div className="relative z-10 flex flex-col justify-center items-center p-4 h-full">
              <h3 className="text-2xl font-semibold text-[#F39C12]">Project 2</h3>
              <p className="mt-4 text-gray-100 text-center">
                Description of the project goes here. Highlight key features and
                functionalities.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div
            className="relative bg-[#1D252F] p-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-opacity-70 h-[350px]"
          >
            <Image
              src="/project3.png" // Replace with the actual image path
              alt="Project 3"
              layout="fill" // Makes the image fill the container
              objectFit="cover" // Ensures the image covers the container
              className="rounded-lg opacity-60 transition-opacity duration-300 ease-in-out"
            />
            <div className="relative z-10 flex flex-col justify-center items-center p-4 h-full">
              <h3 className="text-2xl font-semibold text-[#F39C12]">Project 3</h3>
              <p className="mt-4 text-gray-100 text-center">
                Description of the project goes here. Highlight key features and
                functionalities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
