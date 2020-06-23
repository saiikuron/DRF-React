import React, { useContext } from "react";
import axios from "axios";
import { useForm } from "../customHooks/useForm";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";

export function Login() {
  const [data, setData] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { user, setUser } = useContext(UserContext);

  let history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/auth/login/", data)
      .then((res) => {
        if (res.request.status === 200) {
          setUser(res.data.user);
          // history.push("/");
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
    <div className="container">
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={logoutUser}>Logout</button>
      ) : (
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
      )}
    </div>
  );
}
