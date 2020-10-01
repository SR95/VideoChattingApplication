import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import Button from "@material-ui/core/Button";
import SignIn from "../SignIn/SignIn";

import { Link } from "react-router-dom";

import navbarMUIButtons from "./navbarMUIButtons";
import "./Navbar.css";

export default function Navbar(props) {
  // style variables
  const muiButtonStyles = navbarMUIButtons();

  //state variables
  const [signinOpen, setSigninOpen] = useState(false);

  // fetch session ID
  const createChatroom = () => {
    props.setCurrentTab("Create Chatroom");

    fetch("/make-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sessionName: "TestSession"
      })
    })
      .then(res => {
        let status = res.status;
        if (status == 200) {
          return res.json();
        }
      })
      .then(res => {
        props.setUserSessionDetails({
          API_KEY: res.API_KEY,
          SESSION_ID: res.SESSION_ID,
          TOKEN: res.TOKEN
        });
      });
  };

  return (
    <nav className="navbar-items">
      <div className="leftSide-navbar">
        <h1 className="navbar-logo">Tok</h1>
        <div className="button-box">
          {MenuItems.map((item, index) => {
            if (item.title === props.currentTab) {
              return (
                <Link to={`${item.url}`} style={{ textDecoration: "none" }}>
                  <Button
                    classes={{ root: muiButtonStyles.navbarButton }}
                    disableRipple
                    style={{
                      color: "#c2c2c2",
                      fontSize: "1.2rem"
                    }}
                    onClick={() => {
                      props.setCurrentTab(item.title);
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              );
            } else {
              return (
                <Link to={`${item.url}`} style={{ textDecoration: "none" }}>
                  <Button
                    classes={{ root: muiButtonStyles.navbarButton }}
                    disableRipple
                    onClick={() => {
                      props.setCurrentTab(item.title);
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              );
            }
          })}
        </div>
      </div>

      <div className="button-box">
        {props.userLoggedIn && (
          <Link to={"/tokcall"} style={{ textDecoration: "none" }}>
            <Button
              classes={{ root: muiButtonStyles.navbarChatroomSelection }}
              disableRipple
              onClick={createChatroom}
              disabled={!props.userLoggedIn}
            >
              Create Chatroom
            </Button>
          </Link>
        )}
        <Button
          classes={{ root: muiButtonStyles.navbarChatroomSelection }}
          disableRipple
        >
          Join Chatroom
        </Button>
        <Button
          classes={{ root: muiButtonStyles.navbarSignin }}
          onClick={() => {
            if (!props.userLoggedIn) setSigninOpen(true);
            else props.setUserLoggedIn(false);
          }}
        >
          {(!props.userLoggedIn && "Sign In") ||
            (props.userLoggedIn && "Log Out")}
        </Button>
        <SignIn
          isOpen={signinOpen}
          setIsOpen={setSigninOpen}
          loginSuccessful={props.userLoggedIn}
          setLoginSuccessful={props.setUserLoggedIn}
        />
      </div>
    </nav>
  );
}
