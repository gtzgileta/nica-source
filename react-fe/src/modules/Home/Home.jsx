import React from "react";
import Hero from "./components/Hero";
import { isLoading } from "../../utils/page-util";
import "./HomeLayout.css";
import LatestPodcast from "./components/LatestPodcast";

const HomeLayout = ({ hero, podcasts }) => (
  <React.Fragment>
    {!isLoading(hero) ? <Hero hero={hero} /> : <>Loading...</>}
    {podcasts.length && <LatestPodcast podcasts={podcasts} />}
  </React.Fragment>
);

export default HomeLayout;
