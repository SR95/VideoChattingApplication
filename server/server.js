require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jwt-simple");
var OpenTok = require("opentok");

const apiInfo = {
  API_KEY: "46936794",
  API_SECRET: "35b549d4a518bdaa4fdf74e572ffb64c4bec148a",
  SESSION_ID:
    "2_MX40NjkzNjc5NH5-MTYwMTQxMzM2ODM5MX4yekU2YytHVG5uUnhnbW9vZzRvVC9ZV21-fg",
  TOKEN:
    "T1==cGFydG5lcl9pZD00NjkzNjc5NCZzaWc9M2I0YmYyNmFlNjc2MWIzYTU0OTIyOTZmMTgwOTYxMGIzMjhhMmI0MDpzZXNzaW9uX2lkPTJfTVg0ME5qa3pOamM1Tkg1LU1UWXdNVFF4TXpNMk9ETTVNWDR5ZWtVMll5dEhWRzV1VW5obmJXOXZaelJ2VkM5WlYyMS1mZyZjcmVhdGVfdGltZT0xNjAxNDEzMzk2Jm5vbmNlPTAuNzgyMDI0ODU3MjY1MDU1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MDQwMDUzOTUmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="
};

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

var opentok = new OpenTok(apiInfo.API_KEY, apiInfo.API_SECRET);

app.post("/login", (req, res) => {
  const user_username = req.body.username;
  const user_password = req.body.password;
  let statusNum = 400;
  let message = "Invalid Username or Password";

  const databasePlaceHolder = [
    { id: 1, username: "admin@test.com", password: "12345" },
    { id: 2, username: "admin2@test.com", password: "password" }
  ];

  for (user_id in databasePlaceHolder) {
    if (
      databasePlaceHolder[user_id].username === user_username &&
      databasePlaceHolder[user_id].password === user_password
    ) {
      statusNum = 200;
      message = "Valid Username and Password.";
      break;
    }
  }

  res.status(statusNum).send({ message });
});

app.post("/make-session", (req, res) => {
  var sessionArray = new Array();

  // Create a session that will attempt to transmit streams directly between
  // clients. If clients cannot connect, the session uses the OpenTok TURN server:
  opentok.createSession(function(err, session) {
    if (err) return console.log(err);

    var token = session.generateToken();

    // save the sessionId
    sessionArray.push({
      sessionName: req.body.sessionName,
      sessionId: session.sessionId,
      sessionTokens: [token]
    });
  });

  // Note: Hardcoded values
  // Issue with sessionArray values with timing(?) - uncertain
  res.status(200).send({
    API_KEY: apiInfo.API_KEY,
    SESSION_ID: apiInfo.SESSION_ID, //sessionArray[sessionArray.length - 1].sessionId,
    TOKEN: apiInfo.TOKEN //sessionArray[sessionArray.length - 1].sessionTokens[0]
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
