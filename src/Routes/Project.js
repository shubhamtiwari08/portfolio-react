import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import ProjectCarousels from "../components/ProjectCarousels";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" para="some of my recent works" />
      <ProjectCarousels />
      <Footer />
    </div>
  );
};

export default Project;
