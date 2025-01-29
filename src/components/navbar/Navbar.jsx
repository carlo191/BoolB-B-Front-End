import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-primary position-fixed z-1 w-100">
			<div className="container-fluid">
				{/* Logo */}
				<Link className="fs-2 fw-semibold pe-4 text-light" to="/">
					BoolBnB
				</Link>
				{/* Hamburger Menu */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				{/* Link */}
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						{/* Homepage */}
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/">
								<i className="fa-solid fa-house-chimney" /> Home
							</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Affitta con BoolBnb
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Settings
							</a>
						</li>
					</ul>

          <span className="nav-link">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Accedi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Registrati
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Centro assistenza
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
}
