import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LogInPage = () => {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    const logInDetails = { email, password };
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(logInDetails),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        logIn(res.token);
      });
  };

  return (
    <div>
      <h1>LogInPage</h1>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogIn}>LogIn</button>
    </div>
  );
};

export default LogInPage;
