import React from 'react'
import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div className = "container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-4 mb-0 text-muted">© 2021 Gramarshi Academy International</p>

    {/* <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
    </a> */}

    <ul class="nav col-8 justify-content-end">
      <li class="nav-item"><Link to="/"  class="nav-link px-1 text-muted">Home</Link></li>
     <li class="nav-item"><Link to="/Aboutus" class="nav-link px-1 text-muted">About us</Link></li>
      <li class="nav-item"><Link to="/Activities" class="nav-link px-1 text-muted">Activities</Link></li>
      <li class="nav-item"><Link to="/Admission" class="nav-link px-1 text-muted">Admission</Link></li>
      <li class="nav-item"><Link to="/Achivements" class="nav-link px-1 text-muted">Achivements</Link></li>
      <li class="nav-item"><Link to="/Media" class="nav-link px-1 text-muted">Media</Link></li>
      <li class="nav-item"><Link to="/Contactus" class="nav-link px-1 text-muted">Contact us</Link></li>
    </ul>
  </footer>
        </div>
    )
}
