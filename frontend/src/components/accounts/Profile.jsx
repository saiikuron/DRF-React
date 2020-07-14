import React, { useState } from "react";
import useSWR from "swr";
import axios from "axios";
import Button from "react-bootstrap/Button";

export const Profile = ({ match }) => {
  const AccountsEndpoint = `http://localhost:8000/accounts/${match.params.id}/`;

  const [profile, setProfile] = useState({});

  const getUserProfile = () => {
    return axios.get(AccountsEndpoint).then((res) => {
      setProfile(res.data);
      return res.data;
    });
  };
  const { data: user } = useSWR(AccountsEndpoint, getUserProfile);
  console.log(user);
  return (
    <div className="user-profile">
      <div key={profile.pk}>
        <h3>{profile.username}</h3>
        <p>
          {profile.first_name}
          {""} {profile.last_name}
        </p>
      </div>
      <Button href="/">Go back</Button>
    </div>
  );
};
