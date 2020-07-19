import React, { useState, useMemo, useEffect } from "react";
import Path from "./components/Path";
import Header from "./components/Header";
import "./styles/bootstrap.min.css";
import { UserContext } from "./components/accounts/UserContext";

function App() {
  const [user, setUser] = useState(null);

  const loggedUser = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const data = localStorage.getItem("loggedUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
  });

  return (
    <div>
      <UserContext.Provider value={loggedUser}>
        <Header />
        <div className="container">
          <br />
          <Path />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
