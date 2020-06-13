import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ArticleList } from "./articles/ArticleList";
import { ArticleUpdate } from "./articles/ArticleUpdate";
import { Register } from "./accounts/Register";
import { Login } from "./accounts/Login";

function Path() {
  return (
    <BrowserRouter>
      <div className="Article">
        <Switch>
          <Route exact path="/login/" exact component={Login} />
          <Route exact path="/register/" exact component={Register} />
          <Route exact path="/" exact component={ArticleList} />
          <Route exact path="/:id/" exact component={ArticleUpdate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Path;
