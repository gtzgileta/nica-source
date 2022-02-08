import React from "react";
import { cleanHTML } from "../../../../../utils/page-util";
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
      <div className="col-md-6">
        <div className="title">{podcast.title.rendered}</div>
        <div className="excerpt">{cleanHTML(podcast.excerpt.rendered)}</div>
        <div className="btn-sm btn-white">Know more</div>
      </div>
      <div className="col-md-3">
        <div className="tags">
          <span># Season 1</span>
          <span># Posted on Sep 11, 2020</span>
          <span># audio / goodbyes</span>
        </div>
      </div>
    </div>
  );
};

export default Row;
