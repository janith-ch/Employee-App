/** @format */

import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { getAllEmployees, deleteEmployee } from "../services/employee";
class EmployeeList extends Component {
  state = { employee: [] };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    try {
      const response = await getAllEmployees();
      console.log(response.data);
      this.setState({ employee: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };
  EmployeeList() {
    return this.state.employee.map((employee) => {
      return (
        <EmployeeTableBody
          key={employee.id}
          employee={employee}
          deleteEmployee={this.removeEmployee}
          updateEmployee={this.updateEmployee}
        />
      );
    });
  }
  updateEmployee = (id) => {
    this.props.history.push("/employee-update/" + id);
  };

  removeEmployee = async (id) => {
    try {
      const response = await deleteEmployee(id);
      console.log(response.data);
      this.setState({
        employee: this.state.employee.filter((emp) => emp.id !== id),
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.EmployeeList()}</tbody>
      </Table>
    );
  }
}

export default EmployeeList;

const EmployeeTableBody = (props) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.phone}</td>

      <td>
        <Button
          variant="success"
          onClick={() => {
            props.updateEmployee(props.employee.id);
          }}
        >
          edit
        </Button>{" "}
        <Button
          variant="danger"
          onClick={() => {
            props.deleteEmployee(props.employee.id);
          }}
        >
          delete
        </Button>{" "}
      </td>
    </tr>
  );
};
