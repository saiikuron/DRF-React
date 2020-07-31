import React, { useState, useContext, createContext } from "react";
import axios from "axios";
import { useForm } from "../customHooks/useForm";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import { TokenContext } from "./TokenContext";

export function Login() {
  const [data, setData] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { user, setUser } = useContext(UserContext);
  const { token, setToken } = useContext(TokenContext);

  let history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/auth/login/", data)
      .then((res) => {
        if (res.request.status === 200) {
          setUser(res.data.user);
          setToken(res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token); // Has to be changed in a cookie
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutUser = async () => {
    await axios
      .post("http://127.0.0.1:8000/auth/logout/")
      .then((res) => {
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="useForm">
      <input
        name="username"
        type="username"
        placeholder="username"
        value={data.name}
        onChange={setData}
      />
      <br />
      <input
        name="email"
        type="email"
        placeholder="email"
        value={data.email}
        onChange={setData}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={data.password}
        onChange={setData}
      />

      <br />
      <button onClick={loginUser}>Login</button>
    </div>
  );
}
