import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Section from "./Section";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Section" component={Section} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
