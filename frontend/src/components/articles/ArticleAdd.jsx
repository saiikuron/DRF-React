import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { UserContext } from "../accounts/UserContext";
import { TokenContext } from "../accounts/TokenContext";

function ArticleAdd() {
  const [title, setTitle] = useState();
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  const createArticle = async () => {
    const data = { title, user };
    console.log(data);
    if (token) {
      axios
        .post(`http://localhost:8000/api/`, data, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const data = { title, user };
    console.log("add token", token);
  }, [title]);

  return (
    <div className="AddArticle">
      <h3>Add Article</h3>
      <Form onSubmit={createArticle}>
        <Form.Group controlId="formAddArticleTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            placeholder="Enter title"
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </Form.Group>

        <Button className="float-right" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
}

export default ArticleAdd;
