import React from "react";
import "./index.scss";

const Hero = ({ hero }) => {
  const backgroundImage = `url(${hero.hero_image.url}})`;
  const backgroundPodcasts = `url(https://www.buzzsprout.com/images/badges/listen-on-embed.svg)`;
  return (
    <div className="hero">
      <div className="container">
        <div className="col-md-6">
          <div className="h4 before">Trending Episode</div>
          <h1>{hero.hero_h1}</h1>
          <h2>{hero.hero_h2}</h2>
          <div className="h4 after">Listen On Also</div>
          <div className="tag-list">
            <a
              target="_blank"
              href="SPOTIFY URL"
              className="podcast-platform-url spotify"
              style={{ backgroundImage: backgroundPodcasts }}
            >
              Listen on Spotify
            </a>
            <a
              target="_blank"
              href="GOOGLE PODCASTS URL"
              className="podcast-platform-url google"
              style={{ backgroundImage: backgroundPodcasts }}
            >
              Listen on Google Podcasts
            </a>
            <a
              target="_blank"
              href="APPLE PODCASTS URL"
              className="podcast-platform-url"
              style={{ backgroundImage: backgroundPodcasts }}
            >
              Listen on Apple Podcasts
            </a>
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
