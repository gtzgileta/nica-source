import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import LayoutRoute from "./modules/SiteLayout";
import Home from "./modules/Home";

const browserHistory = createBrowserHistory();

export const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <LayoutRoute exact path="/" component={Home} />
    </Switch>
  </Router>
);
