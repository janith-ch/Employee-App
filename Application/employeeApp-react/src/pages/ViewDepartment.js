/** @format */

import React, { Component } from "react";
import { getDepartment } from "../services/employee";
import { Table, Button } from "react-bootstrap";
class ViewDepartment extends Component {
  state = { department: [] };
  componentDidMount() {
    this.getDepartments();
  }

  getDepartments = async () => {
    try {
      const response = await getDepartment();
      console.log(response.data);
      this.setState({ department: response.data || [] });
    } catch (e) {
      console.log(e);
    }
  };
  DepartmentList() {
    return this.state.department.map((dep) => {
      return (
        <TableBody
          key={dep.id}
          department={dep}
          viewEmployeesByDep={this.viewEmployeesByDep}
        />
      );
    });
  }
  viewEmployeesByDep = (id) => {
    this.props.history.push("/employee-department/" + id);
  };
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.DepartmentList()}</tbody>
      </Table>
    );
  }
}

export default ViewDepartment;

const TableBody = (props) => {
  return (
    <tr>
      <td>{props.department.name}</td>
      <td>{props.department.salary}</td>

      <td>
        <Button
          variant="primary"
          onClick={() => {
            props.viewEmployeesByDep(props.department.id);
          }}
        >
          View
        </Button>{" "}
      </td>
    </tr>
  );
};
