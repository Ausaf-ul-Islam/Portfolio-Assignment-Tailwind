import React from "react";

import HomeSection from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
        <About />
        <Projects />
        <Services />
        <Contact />
    </div>
  );
};

export default Home;
