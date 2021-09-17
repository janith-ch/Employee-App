/** @format */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { updateEmployee, getSingleEmployee } from "../services/employee";

class UpdateEmployee extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  componentDidMount() {
    this.EmployeeData();
  }

  EmployeeData = async () => {
    try {
      const response = await getSingleEmployee(this.props.match.params.id);
      console.log(response.data);
      this.setState({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        phone: response.data.phone,
      });
    } catch (e) {
      console.log(e);
    }
  };
  onChnageName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  onChnageEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onChnagePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const employee = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    try {
      const response = await updateEmployee(
        this.props.match.params.id,
        employee
      );
      console.log(response.status);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={this.onChnageName}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.onChnageEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            value={this.state.phone}
            onChange={this.onChnagePhone}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default UpdateEmployee;
