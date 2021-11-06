
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Header() {


  return (
    <div>
      {/* Start of NavBar Code  */}

      <nav class="navbar navbar-expand-lg navbar-light fbg">
        <div class="container">
          <div
            class="collapse navbar-collapse row align-items-start "
            id="navbarNav"
          >
            <ul class="navbar-nav col">
              <li class="nav-item">
                <a class=" sname Thover" href="#">
                  Gramarshi Academy International
                </a>
              </li>
            </ul>
          </div>

          <div class="row align-items-end" id="navbarNav">
            <ul class="navbar-nav col">
              <li class="nav-item">
                <Link to="/" class="nav-link Thover">
                  HOME
                </Link>
              </li>

              <li class="nav-item Thover">
                <Link to="/Aboutuspage" class="nav-link">
                  ABOUT US
                </Link>
              </li>

              <li class="nav-item Thover">
                <a class="nav-link" href="#">
                  ACTIVITIES
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Thover" href="#">
                  ADMISSION
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link Thover" href="#">
                  ACHIEVEMENTS
                </a>
              </li>

              <li class="nav-item">
                <Link to="/Mediapage" class="nav-link Thover">
                  MEDIA
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link Thover" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* End of NavBar Code */}

      {/* Data below Navbar */}
      <section className="scetion">
        <div className="container"></div>
      </section>

      {/* Data post navbar  */}
    </div>
  );
}
