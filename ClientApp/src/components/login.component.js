import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3 id="headline-of-of">Log in</h3><br />

                <div className="form-group">
                    <label id="login">Aadhar Number</label>
                    <input type="email" className="form-control" placeholder="Enter Aadhar Number" />
                </div>

                <div className="form-group">
                    <label id="login">Password</label>
                    <input type="password" className="form-control" placeholder="Enter Password" />
                </div> 

                <br/>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
        );
    }
}