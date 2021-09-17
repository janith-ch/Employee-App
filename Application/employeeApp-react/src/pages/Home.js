/** @format */

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Row>
            <Col md="2" />
            <Col md="8">
              <NavBar />
              <br></br>
              {this.props.children}
            </Col>
            <Col md="2" />
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
