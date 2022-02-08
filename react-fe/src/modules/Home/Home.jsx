import React from "react";
import Hero from "./components/Hero";
import "./HomeLayout.css";

const HomeLayout = ({ hero }) => (
  <React.Fragment>
    <Hero hero={hero} />
  </React.Fragment>
);

export default HomeLayout;
