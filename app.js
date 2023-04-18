const express = require("express");
const app = express();

// Serve static files (for CSS, Images etc.)
app.use(express.static("public"));

// Route to the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

// Works page
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

// Gallery page
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// Start the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
