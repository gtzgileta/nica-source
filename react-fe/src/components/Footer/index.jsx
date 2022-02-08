import React from "react";
import img from "../../assets/images";
import "./Footer.scss";

const Footer = () => {
  const logo = `url(${img.core.logo})`;
  const backgroundPodcasts = `url(https://www.buzzsprout.com/images/badges/listen-on-embed.svg)`;
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="block-col">
              <div className="logo" style={{ backgroundImage: logo }}></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="block-col">
              <h5>Pages</h5>
              <span>
                <a href="#">About</a>
              </span>
              <span>
                <a href="#">Episode</a>
              </span>
              <span>
                <a href="#">Blog</a>
              </span>
              <span>
                <a href="#">Contact</a>
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="block-col">
              <h5>Recent Episodes</h5>
              <span>
                <a href="#">Episodes 1</a>
              </span>
              <span>
                <a href="#">Episodes 2</a>
              </span>
              <span>
                <a href="#">Episodes 3</a>
              </span>
              <span>
                <a href="#">Episodes 4</a>
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="block-col">
              <h5>Listen My Podcasts Also In</h5>
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
        </div>
      </div>
      <div className="container">
        <div className="bottom">© 2022 NicaSource. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
