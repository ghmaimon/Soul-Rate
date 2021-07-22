import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'


import './navBar.css'

var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");

class NavBar extends Component{

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

  render(){

    
    return(
      <div className="navBar">
          <ul className="navLinks">
            <div className="navItems">
                <div className="navLeft">
                    <Link exact to='/'><img src={logo} alt = "Logo" className="logo"/></Link>
                    <input type="text" className="navSearch"></input>
                </div>
                
                    <Link to='/movies'>Movies</Link>
                    <Link to='/news'>News</Link>
                    <Link to='/login'>login</Link>
                    <Link to='/sign_in'>Sign_in</Link>
                    
{/*<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle border-rad" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="..." alt="profile"/>
  </a>

  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
    <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
    <li><a className="dropdown-item" href="#">Profile info</a></li>
    <li><a className="dropdown-item" href="#">favorite</a></li>
  </ul>

    </div>*/}
    <div>
    <div className="collapse" id="content">
      <div 
        className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
        >
        <ul className="nav flex-column text-white w-100">
          <a href="#" className="border-bottom nav-link h3 text-white my-2">
            <img className="logo" src={logo} alt="..."/>
            <h4>Profile Name</h4>
            <p>see your profile</p>
          </a>
          <a href="#" className="nav-link h3 text-white my-2">
            <i className="bx bxs-dashboard"></i>Home
          </a>
          <a href="#" className="nav-link h3 text-white my-2">
            <i className="bi bi-gear"></i>Setting
          </a>
          <a href="#" className="nav-link h3 text-white my-2">
            <i className="bi bi-question-circle"></i>Help
          </a>
          <a href="#" className="nav-link h3 text-white my-2">
            <i className="bi bi-box-arrow-left"></i>Log out
          </a>
        </ul>
      </div>
    </div>

    
    <div
     className="p-1 my-container active-cont" >
      <nav className="navbar top-navbar navbar-light px-5">
        <button className="btn border-0"  id="menu-btn" data-bs-toggle="collapse" href="#content" role="button" aria-expanded="false" aria-controls="content"><i className="bi bi-caret-down-square"></i></button>
      </nav>
    </div>



    </div>
                    
            </div>
          </ul>
      </div>
    )
  }
}
export default NavBar;