import React, { useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  TextField
} from "@material-ui/core";

import signInMUIButtons from "./signInStyle";

export default function SignIn(props) {
  // style variables
  const signinMUIButtonStyles = signInMUIButtons();

  // state variables
  const [autoFill, setAutoFill] = useState(false);
  const [testUser, setTestUser] = useState({
    username: "admin@test.com",
    password: "12345"
  });
  const [submittedUsername, setSubmittedUsername] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");

  // close sign-in button handler
  const handleClose = () => {
    props.setIsOpen(false);
  };

  const getUserCredentials = () => {
    console.log("User Details: ", {
      username: submittedUsername,
      password: submittedPassword
    });

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: submittedUsername,
        password: submittedPassword
      })
    }).then(res => {
      let status = res.status;
      if (status == 200) {
        props.setLoginSuccessful(true);
        handleClose();
      } else {
        props.setLoginSuccessful(false);
      }
    });
  };

  return (
    <div>
      <Dialog
        open={props.isOpen}
        onClose={() => {
          props.setIsOpen(false);
        }}
        aria-labelledby="form-dialog-title"
        style={{ textAlign: "center" }}
      >
        <DialogTitle id="form-dialog-title" style={{ marginTop: "1rem" }}>
          <text
            style={{
              fontSize: "25px",
              fontFamily: "Piazzolla, serif",
              fontWeight: "bold"
            }}
          >
            Sign In
          </text>
        </DialogTitle>
        <DialogContent>
          <text style={{ color: "red" }}>
            Note: <br />
            Username and Password creation currently unavailable. <br />
            Please use Autofill.
          </text>
          <Container classes={{ root: signinMUIButtonStyles.containerStyle }}>
            <InputLabel style={{ marginBottom: "1rem" }}>Username</InputLabel>
            <OutlinedInput
              placeholder="e.g. john@example.com"
              id="name-sign-up-input"
              type="username"
              fullWidth
              value={(autoFill && testUser.username) || null}
              onChange={e => {
                setSubmittedUsername(e.target.value);
              }}
            />
            <InputLabel style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              Password
            </InputLabel>
            <OutlinedInput
              placeholder="e.g. *********"
              id="name-sign-up-input"
              type="name"
              fullWidth
              value={(autoFill && testUser.password) || null}
              onChange={e => {
                setSubmittedPassword(e.target.value);
              }}
            />
          </Container>
          <text style={{ color: "red" }}>
            Note: Autofill is for testing purposes only.
          </text>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1.5rem"
            }}
          >
            <Button
              onClick={getUserCredentials}
              classes={{ root: signinMUIButtonStyles.submitButton }}
            >
              Submit
            </Button>
            <Button
              onClick={() => {
                setAutoFill(!autoFill);
                setSubmittedUsername(testUser.username);
                setSubmittedPassword(testUser.password);
              }}
              disableRipple
              color={(autoFill && "secondary") || (!autoFill && "black")}
            >
              AutoFill
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
