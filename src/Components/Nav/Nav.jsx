import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-body-tertiary cambio ">
          <div className="container-fluid">
            <a className="navbar-brand new color" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active color"
                    aria-current="page"
                    href="#"
                  >
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color" href="#">
                    Contacto
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
