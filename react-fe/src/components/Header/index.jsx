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
            <li key={index} onClick={() => history.push(item.url)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
