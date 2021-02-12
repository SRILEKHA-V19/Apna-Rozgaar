import React, { Component } from "react";

export default class SignUpProvider extends Component {
    render() {
        return (
            <form>
                <h3 id="headline-of-of">Register</h3><br/>

                <div className="form-group">
                    <label id="login">First name</label>
                    <input type="text" className="form-control" placeholder="Enter First name" />
                </div>

                <div className="form-group">
                    <label id="login">Last name</label>
                    <input type="text" className="form-control" placeholder="Enter Last name" />
                </div>

                <div className="form-group">
                    <label id="login">Industry</label>
                    <input type="text" className="form-control" placeholder="Enter Industry" />
                </div>

                <div className="form-group">
                    <label id="login">Company Name</label>
                    <input type="text" className="form-control" placeholder="Enter Company name" />
                </div>

                <div className="form-group">
                    <label id="login">Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className="form-group">
                    <label id="login">State</label>
                    <input type="text" className="form-control" placeholder="Enter State" />
                </div>

                <div className="form-group">
                    <label id="login">Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/loginProvider.component">log in?</a>
                </p>
            </form>
        );
    }
}