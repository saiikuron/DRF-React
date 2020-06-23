import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "../customHooks/useForm";

export function Register() {
  const [data, setData] = useForm({
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  });

  let history = useHistory();

  const registerUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/auth/register/", data)
      .then((res) => {
        if (res.request.status === 201) {
          history.push("/login/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
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
          name="password1"
          type="password"
          placeholder="password"
          value={data.password1}
          onChange={setData}
        />
        <br />
        <input
          name="password2"
          type="password"
          placeholder="Confirm password"
          value={data.password2}
          onChange={setData}
        />
        <br />
        <input
          name="first_name"
          type="first_name"
          placeholder="First name"
          value={data.name}
          onChange={setData}
        />
        <br />
        <input
          name="last_name"
          type="last_name"
          placeholder="Last name"
          value={data.name}
          onChange={setData}
        />
        <br />
        <button onClick={registerUser}>Register</button>
      </div>
    </div>
  );
}
