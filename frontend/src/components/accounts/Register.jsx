import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [first_name, setFirstname] = useState();
  const [last_name, setLastname] = useState();

  const data = {
    username,
    email,
    password1,
    password2,
    first_name,
    last_name,
  };
  console.log(data);

  const registerUser = async () => {
    const data = {
      username,
      email,
      password1,
      password2,
      first_name,
      last_name,
    };
    axios
      .post("http://localhost:8000/auth/register/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <Form onSubmit={registerUser}>
        <Form.Group controlId="formRegisterUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email adress"
            type="email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <br />
          <Form.Label>New password</Form.Label>
          <Form.Control
            placeholder="Password"
            type="password"
            onChange={(evt) => setPassword1(evt.target.value)}
          />
          <br />
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            placeholder="Confirm"
            type="password"
            onChange={(evt) => setPassword2(evt.target.value)}
          />
          <br />
          <Form.Label>First name</Form.Label>
          <Form.Control
            placeholder="First name"
            onChange={(evt) => setFirstname(evt.target.value)}
          />
          <br />
          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Last name"
            onChange={(evt) => setLastname(evt.target.value)}
          />
        </Form.Group>
        <Button className="float-right" variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
