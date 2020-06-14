import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export function Login() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();

  const loginUser = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };
    await axios
      .post("http://localhost:8000/auth/login/", data)
      .then((res) => {
        if (res.request.status === 200) {
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <Form onSubmit={loginUser}>
        <Form.Group controlId="formRegisterUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Enter your username"
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter your email adress"
            type="email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <br />
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter your password"
            type="password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
