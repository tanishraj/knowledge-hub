import React from "react";
import { Switch, Route } from "react-router-dom";
import routesData from "./routesData";

const Routes = () => {
  return (
    <Switch>
      {routesData.map((route, index) => (
        <Route
          exact
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
