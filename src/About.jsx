import React from "react";
import web from "../src/Images/hero-img.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to Growth with"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
