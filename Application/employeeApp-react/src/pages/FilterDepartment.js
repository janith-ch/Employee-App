/** @format */

import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { getAllEmployeesByDep, getToatl } from "../services/employee";
class FilterDepartment extends Component {
  state = {
    employee: [],
    total: "",
  };

  componentDidMount() {
    this.getEmployeesByDep();
    this.getDepartmentCost();
  }

  getEmployeesByDep = async () => {
    try {
      const response = await getAllEmployeesByDep(this.props.match.params.id);
      console.log(response.data);
      this.setState({ employee: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };
  getDepartmentCost = async () => {
    try {
      const response = await getToatl(this.props.match.params.id);
      console.log(response.data);
      this.setState({ total: response.data });
    } catch (e) {
      console.log(e);
    }
  };
  EmployeeList() {
    return this.state.employee.map((employee) => {
      return <EmployeeTableBody key={employee.id} employee={employee} />;
    });
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.EmployeeList()}</tbody>
        </Table>
        <div>
          <p>
            <b>Salary cost is {this.state.total}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default FilterDepartment;

const EmployeeTableBody = (props) => {
  return (
    <tr>
      <td>{props.employee.name}</td>
      <td>{props.employee.email}</td>
      <td>{props.employee.phone}</td>
    </tr>
  );
};
