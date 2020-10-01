import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactUsPage from "./components/ContactUsPage/ContactUsPage";
import WebCall from "./components/WebCall/WebCall";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./theme.css";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userSessionDetails, setUserSessionDetails] = useState({
    API_KEY: "",
    SESSION_ID: "",
    TOKEN: ""
  });

  return (
    <Router>
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
        userSessionDetails={userSessionDetails}
        setUserSessionDetails={setUserSessionDetails}
      />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route
          path="/tokcall"
          render={() => (
            <div>
              {userSessionDetails.API_KEY !== "" && (
                <WebCall
                  apiKey={userSessionDetails.API_KEY}
                  sessionId={userSessionDetails.SESSION_ID}
                  token={userSessionDetails.TOKEN}
                />
              )}
            </div>
          )}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}
