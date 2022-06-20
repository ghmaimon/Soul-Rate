import React, { Component, Fragment } from 'react';
import "./signIn.css"
import { Button } from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router';

class SignIn extends Component {


    state = {
        redirect: false,
        email: "",
            first_name: "",
            last_name: "",
            password: "",
            gender: "M",
            date: "",
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleFirstName = (e) => {
        this.setState({
            first_name: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            last_name: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    handleDate = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

    performSignIn = (e) => {
        e.preventDefault();
        axios.post("http://0.0.0.0:8000/api/user/create/", this.state).then(
            (res) => {
                console.log(res.data);
                this.setState({redirect: true})
            }
        )
    }
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/login'/>;
        }
        return (
            <Fragment>
                <div className="header">
                    <div className="row position-relative text-light">
                        <div id="signInForm" className="row rounded mx-auto my-5">
                            <div className="position-relative pt-3 text-light">
                                <form>
                                    <h3>Register</h3>
                                    <div className="form-group ">
                                        <label>First Name</label>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i id="iUser" className="bi bi-person-fill"></i></span>
                                            </div>
                                            <input id="inp" onChange={this.handleFirstName} type="text" className="form-control" placeholder="Enter First Name" />
                                        </div>

                                    </div>
                                    <div className="form-group ">
                                        <label>Last Name</label>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i id="iUser" className="bi bi-person"></i></span>
                                            </div>
                                            <input id="inp" onChange={this.handleLastName} type="text" className="form-control" placeholder="Enter Last Name" />
                                        </div>

                                    </div>

                                    <div className="form-group ">
                                        <label>Email</label>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i id="iUser" className="bi bi-envelope-open"></i></span>
                                            </div>
                                            <input id="inp" onChange={this.handleEmail} type="text" className="form-control" placeholder="Enter Email" />
                                        </div>

                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i id="iUser" className="bi bi-key"></i></span>
                                            </div>
                                            <input id="inp" onChange={this.handlePassword} type="password" className="form-control" placeholder="Enter password" />
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Birthday</label>

                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1"><i id="iUser" className="bi bi-calendar2-week"></i></span>
                                            </div>
                                            <input id="inp" onChange={this.handleDate} type="datetime-local" className="form-control date" placeholder="Select your Birthday" />
                                        </div>

                                    </div>

                                    <div className="form-check col-6">
                                        <input className="form-check-input" type="radio" name="gender" value="M" onChange={this.handleGender} />
                                        <label className="form-check-label" for="gridRadios1">Male</label>
                                        
                                        <br />
                                        <input className="form-check-input" type="radio" name="gender" value="F" onChange={this.handleGender} />
                                        <label className="form-check-label" for="gridRadios1">Female </label>
                                    </div>
                                    <div className="BTN">
                                        <button id="btn2" type="submit" onClick={this.performSignIn}>Sign-in</button>
                                    </div>
                                    <div id="cantLogin">
                                        <p><a href="">Can't Sign-in ?</a></p>
                                        <p>Privacy policy Terms of use</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>

        )
    }
}
export default SignIn;