import React from "react";
import Row from "./Row";
import "./index.scss";

const LatestPodcast = ({ podcasts }) => (
  <div className="latest-podcast">
    <div className="container">
      <div className="box">
        <h3>
          Latest Podcast Episodes{" "}
          <div className="btn-md btn-primary">View All</div>
        </h3>
        {podcasts.map((item, index) => (
          <Row key={index} podcast={item} />
        ))}
        <div className="text-center">
          <div className="btn-sm btn-white btn-more">Show More Episodes</div>
        </div>
      </div>
    </div>
  </div>
);

export default LatestPodcast;
