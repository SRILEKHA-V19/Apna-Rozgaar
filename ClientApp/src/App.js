import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import NavMenu from './components/NavMenu';

import choseSignup from "./components/choseSignupOption";
import choseLogin from "./components/choseLoginOption";

import SignUp from "./components/signup.component";
import SignUpProvider from "./components/signupProvider.component";
import Login from "./components/login.component";
import LoginProvider from "./components/loginProvider.component";

export default () => (
    <Layout>
        <Route exact path='/' component={NavMenu} />
        <Route path='/choseSignupOption' component={choseSignup} />
        <Route path='/choseLoginOption' component={choseLogin} />
        <Route path='/signup.component' component={SignUp} />
        <Route path='/signupProvider.component' component={SignUpProvider} />
        <Route path='/login.component' component={Login} />
        <Route path='/loginProvider.component' component={LoginProvider} />
    </Layout>

);

