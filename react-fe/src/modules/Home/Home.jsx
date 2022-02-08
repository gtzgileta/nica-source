import React from "react";
import Hero from "./components/Hero";
import LatestPodcast from "./components/LatestPodcast";
import Gallery from "./components/Gallery";
import { isLoading } from "../../utils/page-util";
import "./HomeLayout.css";

const HomeLayout = ({ hero, podcasts }) => (
  <React.Fragment>
    {!isLoading(hero) ? <Hero hero={hero} /> : <>Loading...</>}
    {!!podcasts.length && <LatestPodcast podcasts={podcasts} />}
    <Gallery />
  </React.Fragment>
);

export default HomeLayout;
