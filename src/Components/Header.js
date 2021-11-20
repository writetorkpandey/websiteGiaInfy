import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            Gramarshi Academy International School
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class={`collapse navbar-collapse  ${show ? "show" : ""}`}>
            <ul class="navbar-nav ms-auto ">
              <li class="nav-item">
                <Link to="/" class="nav-link ">
                  HOME
                </Link>
              </li>
              <li class="nav-item ">
                <Link to="/Aboutus" class="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/Activities">
                  ACTIVITIES
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/Admission">
                  ADMISSION
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/Achivements">
                  ACHIEVEMENTS
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/Media">
                  MEDIA
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link" to="/Contactus">
                  CONTACT US
                </Link>
              </li>
            </ul>

            <Link class="btn btn-outline-success" to="/Login" type="button">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
