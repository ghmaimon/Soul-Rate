import React, { Component, Fragment } from 'react';
import { Button, Card, icon } from 'reactstrap';
import './login.css'

class Login extends Component {
  state = {
    email: "",
    password: ""
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="row position-relative text-light">
            <div id="LoginForm" className="row rounded mx-auto my-5">
              <div className="position-relative pt-5 text-light">
                <form>
                  <h3 className="fs-1 ">Login</h3>
                  <div className="form-group ">
                    <label className="EmailPass">Email</label>
                    <div className="input input-group mb-4">
                      <span className="input-group-text "><i id="iUser" className="bi bi-envelope-open"></i></span>
                      <input id="inp" onChange={this.handleEmail} type="text" className="form-control" placeholder="Enter Email" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="EmailPass">Password</label>
                    <div className="input input-group mb-4">
                      <span className="input-group-text" ><i id="iUser" className="bi bi-key"></i></span>
                      <input id="inp" onChange={this.handlePassword} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="BTN">
                <button id="btn2" type="submit">Login</button>
              </div>
              <div id="cantLogin">
                <p><a href="">Can't log in ?</a></p>
                <p>Privacy policy Terms of use</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>

    )
  }
}
export default Login;