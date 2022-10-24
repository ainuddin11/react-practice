import React, { useEffect, useState } from "react";
import data from "../data";
const url = "https://api.github.com/users";

function UseEffect_user() {
  const [users, setUsers] = useState([]);

  let fetchData = async () => {
    const response = await fetch(url);
    const user = await response.json();

    setUsers(user);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>GitHub Users</h1>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
            <li
              key={id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img
                style={{ width: "64px", height: "64px", borderRadius: "50%" }}
                src={avatar_url}
                alt={login}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "2rem",
                }}
              >
                <h4 style={{ textTransform: "capitalize" }}>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffect_user;
