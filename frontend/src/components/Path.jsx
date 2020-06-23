import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ArticleList } from "./articles/ArticleList";
import { ArticleUpdate } from "./articles/ArticleUpdate";
import { Register } from "./accounts/Register";
import { Login } from "./accounts/Login";
import { UserContext } from "./accounts/UserContext";

function Path() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <UserContext.Provider value={providerValue}>
          <Switch>
            <Route exact path="/login/" exact component={Login} />
            <Route exact path="/register/" exact component={Register} />
            <Route exact path="/" exact component={ArticleList} />
            <Route exact path="/:id/" exact component={ArticleUpdate} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
export default Path;
