import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header style={{ position: "fixed", top: 0, width: "100%" }}>
        <h1>HRMS</h1>
        <nav>
          {/* Dashboard page navbar */}

          <Link to="/Profile">Profile</Link>
          <Link to="/add-employee">Add Employee</Link>

          {/* Add Employee page navbar */}

          <Link to="/">Dashboard</Link>

          <button id="logout">Logout</button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
