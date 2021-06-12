import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import './navBar.css'
class NavBar extends Component{
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
                    
<div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle border-rad" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    <img src="..." alt="profile"/>
  </a>

  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
    <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
    <li><a className="dropdown-item" href="#">Profile info</a></li>
    <li><a className="dropdown-item" href="#">favorite</a></li>
  </ul>
</div>
                    
            </div>
          </ul>
      </div>
    )
  }
}
export default NavBar;