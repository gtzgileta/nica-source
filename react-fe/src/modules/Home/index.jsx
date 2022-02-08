import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHero } from "../../store/wordpress";
import HomeLayout from "./Home";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHero());
  }, []);

  const hero = useSelector((state) => state.Wordpress.hero);
  // If hero not empty obj
  if (Object.keys(hero).length === 0) {
    return <></>;
  }

  return <HomeLayout hero={hero} />;
};

export default Home;
