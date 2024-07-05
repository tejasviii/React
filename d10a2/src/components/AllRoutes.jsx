import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Users from "../Pages/Users";
import SingleUserPage from "../Pages/SingleUserPage";
import NotFoundPage from "../Pages/NotFoundPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/users/1" element={<SingleUserPage />} /> */}
        <Route path="/users/:id" element={<SingleUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
