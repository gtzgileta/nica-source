import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import img from "../../assets/images";
import "./Header.scss";

const Header = () => {
  const history = useHistory();
  const menu = useSelector((state) => state.Wordpress.menu);
  const logo = `url(${img.core.logo})`;
  return (
    <header>
      <div className="container">
        <div id="logo" style={{ backgroundImage: logo }}></div>
        <ul id="menu">
          {menu.map((item, index) => (
            <li
              key={index}
              onClick={() => history.push(item.url)}
              className={index === 0 ? "selected" : ""}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul id="menu-buttons">
          <li className="btn-md btn-primary">Subscribe</li>
          <li className="btn-md btn-white">Sign-In</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
