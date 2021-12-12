import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

import './navBar.css'

class NavBar extends Component {

  /*
   src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
   integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
   crossorigin="anonymous"
 
   
 
 
   var menu_btn = document.querySelector("#menu-btn");
   var sidebar = document.querySelector("#sidebar");
   var container = document.querySelector(".my-container");
   menu_btn.addEventListener("click", () => {
     sidebar.classList.toggle("active-nav");
     container.classList.toggle("active-cont");
   });
  */

  render() {


    return (
      <div id="navBar" className="navbar navbar-expand-lg">
        <div className="navLinks">
          <div className="navLeft">
            <Link exact to='/'><img src={logo} alt="Logo" className="logo" /></Link>
            <input type="text" className="navSearch"></input>
            <button id="btnNavCollapse" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent1" aria-controls="navContent1" aria-expanded="false" aria-label="Toggle navigation">
              <i id="iconBtn" className="bi bi-list fs-1"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navContent1">
            <div className="navItems">
              <Link to='/movies' id="itm">Movies</Link>
              <Link to='/news' id="itm">News</Link>
              <Link to='/login' id="itm">login</Link>
              <Link to='/sign_in' id="itm">Sign_in</Link>
              <div>
                <div className="collapse" id="content">
                  <div
                    className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
                    id="sidebar"
                  >
                    <ul className="nav flex-column text-white w-100 gap-3">
                      <a href="#" className="border-bottom nav-link h3 text-white my-2">
                        <img className="logo bg-warning rounded-circle ms-5" src={logo} alt="..." />
                        <h4>Profile Name</h4>
                        <p>see your profile</p>
                      </a>
                      <a href="#" className="nav-link h3 text-white mx-2 py-3">
                        <i className="bx bxs-dashboard pe-2"></i><span>Home</span>
                      </a>
                      <a href="#" className="nav-link h3 text-white mx-2 py-3">
                        <i className="bi bi-gear pe-2"></i><span>Setting</span>
                      </a>
                      <a href="#" className="nav-link h3 text-white mx-2 py-3">
                        <i className="bi bi-question-circle pe-2"></i><span>Help</span>
                      </a>
                      <a href="#" className="nav-link h3 text-white mx-2 py-3">
                        <i className="bi bi-box-arrow-left pe-2"></i><span>Log out</span>
                      </a>
                    </ul>
                  </div>
                </div>
                <button className="btn border-0 me-3" id="menu-btn" data-bs-toggle="collapse" href="#content" role="button" aria-expanded="false" aria-controls="content">
                  <i className="bi bi-person-circle fs-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default NavBar;