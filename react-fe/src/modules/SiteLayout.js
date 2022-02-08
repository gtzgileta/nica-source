import React from "react";
import { Route, withRouter } from "react-router-dom";
import Header from "../components/Header";
import "./global.scss";

// eslint-disable-next-line react/prop-types
const LayoutRoute = ({ component: Component, ...rest }) => {
  const panel = (
    <React.Fragment>
      <Header />
      <Component {...rest} />
    </React.Fragment>
  );

  // Return React Router's route with render function
  return <Route render={() => panel} {...rest} />;
};

export default withRouter(LayoutRoute);
