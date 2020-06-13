import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ArticleAdd() {
  const [title, setTitle] = useState();

  const createArticle = async () => {
    const data = { title };
    axios.post(`http://localhost:8000/api/`, data).then((res) => {});
  };

  return (
    <div className="AddArticle">
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
