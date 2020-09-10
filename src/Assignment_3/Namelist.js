import React from "react";
import Stylesheet from "./Stylesheet.js";
//import "fontsource-roboto";
//import Button from "@material-ui/core/Button";

function Namelist() {
  const state = {
    employees: [
      { id: "1", name: "Charlie", job: "Janitor" },
      { id: "2", name: "Mac", job: "Bouncer" },
      { id: "3", name: "Dee", job: "Aspiring actress" },
      { id: "4", name: "Dennis", job: "Bartender" },
    ],
  };

  let employee = state.employees.map((emp) => {
    return <Stylesheet name={emp.name} job={emp.job} />;
  });

  const name = "Name";
  const job = "Job";
  const remove = "Remove";
  //const add = "Add";

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>
              {/* <Button variant="contained" color="Primary">
                {add}
              </Button> */}
            </th>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <th>{name}</th>
            <th>{job}</th>
            <th>{remove}</th>
          </tr>
          {employee}
        </tbody>
      </table>
    </div>
  );
}

export default Namelist;
