import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "./accounts/UserContext";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  const { user, setUser } = useContext(UserContext);

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
    <Navbar expand="lg" variant="dark" bg="primary">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="../../../public/favicon.ico"
          width="30"
          height="30"
          className="align-top d-inline-block"
        />{" "}
        React Tutorial
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarColor01" />
      <Navbar.Collapse id="navbarColor01">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {user ? (
            <>
              <p>{user.username}</p>
              <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link href="/login/">Login</Nav.Link>
          )}
          <Nav.Link href="/register/">Register</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="my-2 my-sm-0" variant="secondary">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
