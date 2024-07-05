import React from "react";
import { Navigate } from "react-router-dom";

const AdminPage = () => {
    const isAdmin = false;

    if(!isAdmin){
        return <Navigate to="/" />
    }
  return (
    <div>
      <h1>AdminPage</h1>
    </div>
  );
};

export default AdminPage;
