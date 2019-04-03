import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routers/RouterLoadable.js";
import RouterIntercept from "./RouterIntercept";

export default class Routers extends Component {
  render() {
    return (
      <Switch style={{ height: "100%" }}>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact
            path={route.path}
            render={props => <RouterIntercept {...props} router={route} />}
          />
        ))}
      </Switch>
    );
  }
}
