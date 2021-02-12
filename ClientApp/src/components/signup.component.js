import React, { Component } from "react";

export default class SignUp extends Component {
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
                    <label id="login">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Enter Phone Number" />
                </div>

                <div className="form-group">
                    <label id="login">Occupation</label>
                    <input type="text" className="form-control" placeholder="Enter Occupation" />
                </div>

                <div className="form-group">
                    <label id="login">Aadhar Number</label>
                    <input type="text" className="form-control" placeholder="Enter Aadhar Number" />
                </div>

                <div className="form-group">
                    <label id="login">State</label>
                    <input type="text" className="form-control" placeholder="Enter State" />
                </div>

                <div className="form-group">
                    <label id="login">Pin Code</label>
                    <input type="text" className="form-control" placeholder="Enter Pin Code" />
                </div>

                <div className="form-group">
                    <label id="login">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login.component">log in?</a>
                </p>
            </form>
        );
    }
}