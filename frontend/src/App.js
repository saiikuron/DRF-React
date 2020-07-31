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

  const updateToken = async () => {
    const refresh_token = { refresh: localStorage.getItem("refresh_token") }; // to update to cookies
    await axios
      .post("http://localhost:8000/token/refresh/", refresh_token)
      .then((res) => {
        setToken(res.data.access);
        console.log(res.data.access);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const data = localStorage.getItem("loggedUser");
    if (data) {
      setUser(JSON.parse(data));
      updateToken();
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
            <button onClick={updateToken}>Token</button>
          </div>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
