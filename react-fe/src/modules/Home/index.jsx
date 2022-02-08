import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHero, getPodcasts } from "../../store/wordpress";

import HomeLayout from "./Home";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHero());
    dispatch(getPodcasts());
  }, []);

  const hero = useSelector((state) => state.Wordpress.hero);
  const podcasts = useSelector((state) => state.Wordpress.podcasts);
  console.log("podcasts", podcasts);

  return <HomeLayout hero={hero} podcasts={podcasts} />;
};

export default Home;
