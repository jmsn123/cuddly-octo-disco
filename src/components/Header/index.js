import React from "react";
import "./index.css";
import Image from "../../assets/books.png";
function index() {
  return (
    <header>
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <i class="fas fa-book-reader fa-2x mx-3"></i>Books
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-right text-light"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  HOME
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  COURSE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  PRICE
                </a>
              </li>
              <li class="nav-item dropdown">
                <div class="dropdown">
                  <a href="#" class="nav-link">
                    PAGES
                  </a>
                  <div class="dropdown-content">
                    <a href="#">Generic</a>
                    <a href="#">Element</a>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FACT
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-7 col-sm-12  text-white">
            <h6>AUTHOR: DAILY TUITION</h6>
            <h1>EXCITING ADVENTURE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              accusamus eum dignissimos ipsa sequi expedita.
            </p>
            <button class="btn btn-light px-5 py-2 primary-btn">
              By now for $5.99
            </button>
          </div>
          <div class="col-md-5 col-sm-12  h-25">
            <img src={Image} alt="Book" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default index;
