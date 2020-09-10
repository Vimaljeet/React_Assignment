import React from "react";
import "./myStyles.css";
import Button from "@material-ui/core/Button";

const employee = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.job}</td>
      <td>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default employee;
