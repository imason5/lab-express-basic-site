const express = require("express");
const app = express();

// Route to the home page
app.get("/", (req, res) => {
  console.log("Request to the home page");
  res.send("Welcome to the home page");
});

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
