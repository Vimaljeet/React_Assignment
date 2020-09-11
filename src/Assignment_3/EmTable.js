import React, { Component } from "react";
import Form from "./Form";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

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
  removeBtn = (eIndex) => {
    const emp = this.state.eList;
    emp.splice(eIndex, 1);
    this.setState({ emp: emp });
  };

  renderEmp = (employee, index) => {
    return (
      <tr>
        <td>{employee.employeeName}</td>
        <td>{employee.employeeJob}</td>
        <td>
          {
            <Button
              variant="contained"
              color="secondary"
              onClick={this.removeBtn.bind(this, index)}
            >
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
        <Container component="main" maxWidth="xs">
          <Button variant="contained" color="primary" onClick={this.submitBtn}>
            Submit
          </Button>
        </Container>
        <table className="table">
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
