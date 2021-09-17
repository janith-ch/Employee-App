/** @format */

import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { createEmployee, getDepartment } from "../services/employee";
import { Multiselect } from "multiselect-react-dropdown";

class EmployeeCreate extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    department: [],
    department2: [],
  };

  componentDidMount() {
    this.fetchDepartment();
  }

  fetchDepartment = async () => {
    try {
      const response = await getDepartment();

      if (response.data.length > 0) {
        this.setState({
          department: response.data || [],
          //  tripType: response.data[0].tripType,
        });
      }
      console.log(this.state.department);
      console.log(this.state.options);
    } catch (ex) {
      console.log(ex);
      // error handling
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
      department: this.state.department2,
    };
    console.log(this.state.department2);
    try {
      const response = await createEmployee(employee);
      console.log(response.status);
    } catch (e) {
      console.log(e);
    }
  };
  onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    console.log(selectedItem);
    this.setState({ department2: selectedList });
  };
  onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    console.log(removedItem);
    this.setState({ department2: selectedList });
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
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>

          <Multiselect
            options={this.state.department} // Options to display in the dropdown
            selectedValues={this.state.department2} // Preselected value to persist in dropdown
            onSelect={this.onSelect} // Function will trigger on select event
            onRemove={this.onRemove} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default EmployeeCreate;
