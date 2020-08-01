import React from "react";
import Home from "./components/Home";
// import { Provider } from 'react-redux'
// think about using apolo-client instead of apollo-boost
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";

export const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Root);
