import React, { useState, useMemo, useEffect } from "react";
import Path from "./components/Path";
import Header from "./components/Header";
import "./styles/bootstrap.min.css";
import axios from "axios";
import { UserContext } from "./components/accounts/UserContext";
import { TokenContext } from "./components/accounts/TokenContext";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const loggedUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  const UserToken = useMemo(() => ({ token, setToken }), [token, setToken]);

  const updateToken = async (refresh_token) => {
    await axios.post("auth/token/refresh/", refresh_token).then((res) => {
      localStorage.removeItem("refresh_token");
      localStorage.setItem("refresh_token", res.data.refresh_token);
      setToken(res.data.access_token);
    });
  };

  useEffect(() => {
    const data = localStorage.getItem("loggedUser");
    const refresh_token = localStorage.getItem("refresh_token");

    if (data) {
      setUser(JSON.parse(data));
      updateToken(refresh_token);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedUser", JSON.stringify(user));
  });

  return (
    <div>
      <UserContext.Provider value={loggedUser}>
        <TokenContext.Provider value={UserToken}>
          <Header />
          <div className="container">
            <br />
            <Path />
          </div>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
