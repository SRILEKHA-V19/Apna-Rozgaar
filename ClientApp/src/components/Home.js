import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators1 } from '../store/SummaryFLReport';
import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }
    componentWillMount() {
        //this.props.requestFL();
    }
    componentDidUpdate() {
        //if (this.props.forceReload) {
        //    this.props.requestFL();
        //}

    }
    render() {
        return (
            <h1>Hi !!!</h1>
        )
    }
}

export default Home;
