import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../assets/home.png';
import blueCollared from '../assets/Labour-migration.png';
import { resources } from '../commons/i18n';

const { headerTitle } = resources.resources.en.translations;
const Layout = (props) => (
  <Container fluid>
    <Row id="header-of-of" className="align-items-center justify-content-center">
      <Col id="img-logo" sm={1} lg={1}> <Link to="/"><img src={home} alt="Logo Icon" /></Link></Col>
      <Col id="title-of-of" className="text-sm-left" sm={5} lg={5}>{headerTitle}</Col>
      <Col sm={5} lg={5}></Col>
    </Row>
    <br/>
    <Row id="content-of-oc">
      <Col id="headline-of-of" sm={9}>
        <h1> <center> Welcome to Apna Rozgaar - Job Search App </center> </h1> <br /><br />
        <img src={blueCollared} id="frontPage-image" />
      </Col>
      <Col id="column-of-of" className="view-filter-container p-grid p-col-12 p-align-start p-justify-center" sm={3}>
        {props.children}
      </Col>
    </Row>
  </Container>
);

export default Layout;