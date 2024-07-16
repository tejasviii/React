import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authDetails, logIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      {authDetails.isAuth ? (
        <h1>Token : {authDetails.token}</h1>
      ) : (
        <h1>User not Logged In</h1>
      )}
      <button onClick={logOut}>LogOut</button>
      <button onClick={() => navigate("/about")}>
        Click to go to About page
      </button>
    </div>
  );
};

export default Home;
