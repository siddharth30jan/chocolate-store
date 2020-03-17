import React from "react";
import HomePage from "./HomePage";
import Cart from "./Cart";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};

export default Router;
