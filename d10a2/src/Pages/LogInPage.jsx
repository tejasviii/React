import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const LogInPage = () => {
  const { toggleAuth } = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/users" />;
  }
  return (
    <div>
      <h1>LogInPage</h1>
      <button onClick={toggleAuth}>Click Here</button>
    </div>
  );
};

export default LogInPage;
