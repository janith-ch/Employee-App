/** @format */

import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <b>EMPLOYEE</b>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/employee-list">
                <b>VIEW EMPLOYEE</b>
              </Nav.Link>
              <Nav.Link href="/employee-create">
                <b>CREATE EMPLOYEE</b>
              </Nav.Link>
              <Nav.Link href="/department-list">
                <b>VIEW DEPARTMENT</b>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
