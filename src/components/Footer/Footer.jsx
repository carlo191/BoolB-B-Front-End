import React from "react";


export default function Footer() {
  return (
    <footer className="bg-primary text-white py-3">
      <ul className="d-flex justify-content-center list-unstyled mb-3">
        <li className="mx-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fa-brands fa-facebook fa-xl"></i>
          </a>
        </li>
        <li className="mx-3">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
        </li>
        <li className="mx-3">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
        </li>
      </ul>
      <div className="d-flex justify-content-center">
        <p className="mb-0">@2025</p>
      </div>
    </footer>
  );
}
