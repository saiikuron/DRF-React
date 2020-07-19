import React, { useState, useMemo, Profiler } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArticleList } from "./articles/ArticleList";
import { ArticleUpdate } from "./articles/ArticleUpdate";
import { Register } from "./accounts/Register";
import { Login } from "./accounts/Login";
import { Profile } from "./accounts/Profile";

function Path() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login/" exact component={Login} />
          <Route exact path="/register/" exact component={Register} />
          <Route exact path="/user/:id/" exact component={Profile} />
          <Route exact path="/" exact component={ArticleList} />
          <Route exact path="/:id/" exact component={ArticleUpdate} />
        </Switch>
      </div>
    </Router>
  );
}
export default Path;
