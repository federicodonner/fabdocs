import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Reference from "./Reference";
import Search from "./Search";
import About from "./About";
import Document from "./Document";
import Section from "./Section";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/d/:document" component={Document} />
        <Route exact path="/s/:document/:section" component={Section} />
        <Route exact path="/r" component={Reference} />
        <Route exact path="/se" component={Search} />
        <Route exact path="/a" component={About} />
        <Route exact path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Router;
