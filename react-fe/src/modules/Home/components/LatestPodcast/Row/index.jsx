import React from "react";
import "./index.scss";

const Row = ({ podcast }) => {
  return (
    <div className="row">
      <div className="col-md-3">
        <div
          className="img"
          style={{ backgroundImage: `url(${podcast.acf.gallery.url})` }}
        ></div>
      </div>
      <div className="col-md-6">{podcast.title.rendered}</div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default Row;
