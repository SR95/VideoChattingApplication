require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const jwt = require("jwt-simple");
var OpenTok = require("opentok");

const app = express();
app.use(bodyParser.json());

var opentok = new OpenTok(process.env.API_KEY, process.env.API_SECRET);

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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
    API_KEY: process.env.API_KEY,
    SESSION_ID: process.env.SESSION_ID, //sessionArray[sessionArray.length - 1].sessionId,
    TOKEN: process.env.TOKEN //sessionArray[sessionArray.length - 1].sessionTokens[0]
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
