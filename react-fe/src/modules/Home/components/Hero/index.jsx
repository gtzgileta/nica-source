import React from "react";
import "./index.scss";

const Hero = ({ hero }) => {
  const backgroundImage = `url(${hero.hero_image}})`;
  return (
    <div className="hero">
      <div className="container">
        <div className="col-md-6">
          <div className="h4 before">Trending Episode</div>
          <h1>{hero.hero_h1}</h1>
          <h2>{hero.hero_h2}</h2>
          <div className="h4 after">Listen On Also</div>
          <div className="tag-list">
            <span className="spotify">Spotify</span>
            <span className="google">Google Podcasts</span>
            <span className="apple">Apple Podcasts</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="side-image" style={{ backgroundImage }}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
