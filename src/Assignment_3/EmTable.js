import React, { Component } from "react";
import Form from "./Form";
import Button from "@material-ui/core/Button";

export class EmTable extends Component {
  state = {
    eList: [],
  };
  submitBtn = () => {
    let eName = document.getElementById("name").value;
    let eJob = document.getElementById("job").value;
    let eObject = { employeeName: eName, employeeJob: eJob };
    this.state.eList.push(eObject);
    this.setState(this.state.eList);
  };

  renderEmp = (employee, index) => {
    return (
      <tr>
        <td>{employee.employeeName}</td>
        <td>{employee.employeeJob}</td>
        <td>
          {
            <Button variant="contained" color="secondary">
              Remove
            </Button>
          }
        </td>
      </tr>
    );
  };

  render() {
    return (
      <div>
        <Form />
        <Button variant="contained" color="primary" onClick={this.submitBtn}>
          Submit
        </Button>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>{this.state.eList.map(this.renderEmp)}</tbody>
        </table>
      </div>
    );
  }
}

export default EmTable;
