import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Users from "../Pages/Users";
import SingleUserPage from "../Pages/SingleUserPage";
import NotFoundPage from "../Pages/NotFoundPage";
import SuccessPage from "../Pages/SuccessPage";
import AdminPage from "../Pages/AdminPage";
import LogInPage from "../Pages/LogInPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        {/* <Route path="/users/1" element={<SingleUserPage />} /> */}
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <SingleUserPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="login" element={<LogInPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
