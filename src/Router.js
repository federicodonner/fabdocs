import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Section from "./Section";
import Infraction from "./Infraction";
import Search from "./Search";
import About from "./About";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/section" component={Section} />
        <Route exact path="/infraction/:infraction" component={Infraction} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route component={Home} />
      </Switch>
    );
  }
}

export default Router;
