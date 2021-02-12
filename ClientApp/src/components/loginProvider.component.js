import React, { Component } from "react";

export default class LoginProvider extends Component {
    render() {
        return (
            <form>

                <h3 id="headline-of-of">Log in</h3><br />

                <div className="form-group">
                    <label id="login">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label id="login">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <br />

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
        );
    }
}