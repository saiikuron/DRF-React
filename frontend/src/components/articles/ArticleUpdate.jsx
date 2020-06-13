import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export const ArticleUpdate = ({ match }) => {
  const ArticlesEndpoint = `http://localhost:8000/api/${match.params.id}/`;
  const [title, setTitle] = useState();

  let history = useHistory();

  const deleteArticle = async (e) => {
    e.preventDefault();
    await axios
      .delete(ArticlesEndpoint)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const updateArticle = async (e) => {
    e.preventDefault();
    const data = { title };
    await axios
      .put(ArticlesEndpoint, data)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const getArticle = () => {
    return axios.get(ArticlesEndpoint).then((res) => {
      setTitle(res.data.title);
    });
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div className="AddArticle">
      <Form onSubmit={updateArticle}>
        <Form.Group controlId="formAddArticleTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            defaultValue={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />
        </Form.Group>
        <Button className="float-left" variant="danger" onClick={deleteArticle}>
          Delete
        </Button>
        <Button className="" variant="light" href="/">
          Cancel
        </Button>
        <Button className="float-right" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
    </div>
  );
};
