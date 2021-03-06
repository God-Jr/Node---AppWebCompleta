//REQUIRES
const express = require("express");
const path = require("path");

//INITIALITATIONS
const app = express();

//SETTINGS
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

//MIDDLEWARES
app.use(
  express.urlencoded({
    extended: false
  })
);

//GLOBAL VARIABLES

//ROUTES
app.get("/", (req, res) => {
  res.send("hoal");
});

//STATIC FILES
app.set(express.static(path.join(__dirname, "public")));

module.exports = app;
