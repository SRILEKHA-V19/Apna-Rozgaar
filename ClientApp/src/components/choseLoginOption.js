import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class choseLogin extends Component {
    render() {
        return (
            <form>

                <br/> <br/> <h3 id="headline-of-of"> Chose Option: </h3> <br /> <br/>

                <Link to="/login.component" className="btn btn-dark btn-lg btn-block"> Job Seeker </Link> <br/>

                <Link to="/loginProvider.component" className="btn btn-dark btn-lg btn-block"> Job Provider </Link>

            </form>
        );
    }
}
