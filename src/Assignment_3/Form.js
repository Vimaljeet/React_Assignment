import React from "react";
import TextField from "@material-ui/core/TextField";
import { Container } from "@material-ui/core";

var EmForm = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <form noValidate autoComplete="off">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="job"
            label="Job"
            name="job"
          />
        </form>
      </Container>
    </div>
  );
};
export default EmForm;
