import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <Link class="navbar-brand" to="/">
              Global Cloud Fighter
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://chat.openai.com/">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                  
                </li>

                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            {/* <li><hr class="dropdown-divider" /></li> */}
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>



               
                
              </ul>
              <form class="d-flex">
                <button class="btn btn-style" type="submit">  
                  Sign Up
                </button>
                <button class="btn btn-style btn-style-border" type="submit">
                  Log In 
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
