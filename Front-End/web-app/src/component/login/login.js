import React, { Component } from 'react';
import { Button,Card ,icon} from 'reactstrap';
import './login.css'

class Login extends Component{
  state={
    email:"",
    password:""
  }
  handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}
handlePassword=(e)=>{
  this.setState({
      password:e.target.value
  })
}
  render(){
    return(
<div className="login">
  <div className="container col-8 position-relative pt-4 text-light">
    <div id="row" className="row rounded mx-auto">
      <div className="position-relative pt-5 text-light">
        <form className="border-orange">
            <h3 className="position-absolute start-50 translate-middle">Account Login</h3>
            

            <div className="form-group ">
              <label>Email</label>
              
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i id="btn" className="bi bi-envelope-open"></i></span>
                </div>
                <input id="inp" onChange={this.handleEmail} type="text" className="form-control" placeholder="Enter Email"/>
                </div>

            </div>
              <div className="form-group">
              <label>Password</label>

                  <div className="input-group mb-3">
                  <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i id="btn" className="bi bi-key"></i></span>
                  </div>
                  <input id="inp" onChange={this.handlePassword} type="password" className="form-control" placeholder="Enter password"/>
                  </div>

              </div>
            <div className="row row-cols-lg-4 pb-5 py-5 px-3">
            <button type="submit" className="btn btn-warning btn-lg btn-block position-absolute start-50 translate-middle">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>   
</div>
   
    )
  }
}
export default Login;