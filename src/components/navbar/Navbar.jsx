import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary text-light">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="fs-2 fw-semibold pe-4" to="/">
          BoolBnB
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Link */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Homepage */}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "fs-6 " + (isActive ? "text-light" : "text-gray")
                }
                to="/"
              >
                {/* <i className="fa-light fa-house fa-2xl">Home</i> */}
                <i className="fa-solid fa-house-chimney" /> Home
              </NavLink>
            </li>

            {/* esempio */}
            {/* <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  "fs-6 " + (isActive ? "text-light" : "text-gray")
                }
                to="/property/10"
              >
                esempio
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
