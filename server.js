
const express = require('express')
const app = express()
const path = require("path");

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 8080;

// Create a generic function to handle requests and responses
app.get("/", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/table", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function (req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reserve.html"));
});


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

