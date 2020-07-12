import React from "react";
import useSWR from "swr";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const Profile = ({ match }) => {
  const AccountsEndpoint = `http://localhost:8000/api/${match.params.id}/`;
  const getUserProfile = () => {
    return axios.get(AccountsEndpoint).then((res) => {
      return res.data;
    });
  };
  const { data: profile } = useSWR(AccountsEndpoint, getUserProfile);

  return (
    <div className="ArticleList">
      {profile &&
        profile.map((profile) => {
          return (
            <div key={profile.id}>
              <h1>
                {profile.username}
                {""}
              </h1>
              <p>
                {profile.first_name}
                {""}
                {profile.last_name}
              </p>
            </div>
          );
        })}
        <Button href='/'>Go back</Button>
    </div>
  );
};
