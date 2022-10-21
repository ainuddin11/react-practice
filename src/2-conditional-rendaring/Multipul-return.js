import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

function Multipul_return() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("deafault user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsError(true);
        }
      })
      .then((users) => {
        const { login } = users;
        setLoading(false);
        setUser(login);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ width: "80vw", margin: "4em auto", textAlign: "center" }}>
        <h1>Loadding .....</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ width: "80vw", margin: "4em auto", textAlign: "center" }}>
        <h1>Error.....</h1>
      </div>
    );
  }

  return (
    <div style={{ width: "80vw", margin: "4em auto", textAlign: "center" }}>
      <h1>{user}</h1>
    </div>
  );
}

export default Multipul_return;
