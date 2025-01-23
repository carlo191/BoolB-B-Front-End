import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a href="/" className="nav-link text-white">
            <i className="fa-light fa-house fa-2xl">Homepage</i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
