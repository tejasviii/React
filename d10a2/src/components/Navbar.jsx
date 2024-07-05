import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/users", label: "Users" },
];

const Navbar = () => {
  const defaultStyle = {
    textDecoration: "none",
    color: "black",
  };

  const activeStyle = {
    textDecoration: "none",
    color: "green",
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        border: "1px solid pink",
        padding: "10px",
        backgroundColor: "lightpink",
        margin: "10px",
      }}
    >
      {/* <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/about">
        About
      </Link>
      <Link style={linkStyle} to="/contact">
        Contact
      </Link>
      <Link style={linkStyle} to="/users">
        Users
      </Link> */}

      {/* {links.map((link) => (
        <Link style={linkStyle} to={link.to}>
          {link.label}
        </Link>
      ))} */}

      {links.map((link) => (
        <NavLink
          style={({isActive}) => {
            // console.log(isActive);
            return isActive ? activeStyle : defaultStyle;
          }}
          to={link.to}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
