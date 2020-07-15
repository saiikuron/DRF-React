import React, { useContext } from "react";
import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import ArticleAdd from "./ArticleAdd";
import { UserContext } from "../accounts/UserContext";

const ArticlesEndpoint = "http://localhost:8000/api/";

const getData = () => {
  return axios.get(ArticlesEndpoint).then((res) => {
    return res.data;
  });
};

export const ArticleList = () => {
  const { data: articles } = useSWR(ArticlesEndpoint, getData);
  const { user } = useContext(UserContext);

  return (
    <div className="ArticleList">
      {user ? (
        <div className="loggedUser">
          <h1>Hello, {user.username}</h1>
          <br />
        </div>
      ) : (
        ""
      )}
      <ArticleAdd /> <br />
      <h3>Article list:</h3>
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id}>
              <p>
                {article.id} -{" "}
                <Link to={`/${article.id}`}>{article.title}</Link>, {""}
                <Link to={`/user/${article.user.id}`}>
                  {article.user.username}
                </Link>
              </p>
            </div>
          );
        })}
    </div>
  );
};
