import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav flex">
        <div className="heading-container flex">
          <h1 className="heading">
            Arrowhead <span>Task</span>
          </h1>
        </div>
      </nav>
      <div className="profile flex">
        <img
          className="logo"
          src="/public/assets/logo.png"
          alt="profile picture"
        ></img>
        <h1 className="section-heading">Shashwat Topre</h1>
      </div>
    </>
  );
};

export default Navbar;
