import React, { Component } from 'react';
import "./signIn.css"
import {Button} from 'reactstrap'
class SignIn extends Component{
    state={
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        gender:"male",
        date:"",
    }
    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    handleFirstName=(e)=>{
        this.setState({
            firstName:e.target.value
        })
    }
    handleLastName=(e)=>{
        this.setState({
            lastName:e.target.value
        })
    }
    handlePassword=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    handleGender=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }
    handleDate=(e)=>{
        this.setState({
            gender:e.target.value
        })
    }
    render(){
        return(
            <div className="sign-in">
                  <div className="container col-8 position-relative text-light ">
    <div id="row" className="row rounded mx-auto">
      <div className="position-relative pt-5 text-light">
        <form className="border-orange">
            <h3>Register</h3>
            <div className="form-group ">
              <label>First Name</label>
              
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i id="btn" className="bi bi-person-fill"></i></span>
                </div>
                <input id="inp" onChange={this.handleFirstName} type="text" className="form-control" placeholder="Enter First Name"/>
                </div>

            </div>            
            <div className="form-group ">
              <label>Last Name</label>
              
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i id="btn" className="bi bi-person"></i></span>
                </div>
                <input id="inp" onChange={this.handleLastName} type="text" className="form-control" placeholder="Enter Last Name"/>
                </div>

            </div>

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

              <div className="form-group">
              <label>Birthday</label>

                  <div className="input-group mb-3">
                  <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1"><i id="btn" className="bi bi-calendar2-week"></i></span>
                  </div>
                  <input id="inp" onChange={this.handleDate} type="datetime-local" className="form-control date" placeholder="Select your Birthday"/>
                  </div>

              </div>

      <div className="form-check col-6">
        <input className="form-check-input" type="radio" name="gender" value="male" onChange={this.handleGender}/>
        <label className="form-check-label" for="gridRadios1">Male</label>
        &emsp;
        <br/>
        <input className="form-check-input" type="radio" name="gender" value="female" onChange={this.handleGender}/>
        <label className="form-check-label" for="gridRadios1">Female </label>
      </div>


            <div className="row row-cols-lg-4 pb-5 py-5 px-3">
            <button type="submit" className="btn btn-warning btn-lg btn-block">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>  

            </div>
        )
    }
}
export default SignIn;