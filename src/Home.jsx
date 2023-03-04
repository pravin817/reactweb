import React from "react";
import web from "../src/Images/home.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started "
      />
    </>
  );
};

export default Home;
