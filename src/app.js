const express = require("express");
const app = express();
const path = require("path");
const getData = require("./libraryManager");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
//app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  const result = getData("./config.json");
  res.render("index", { data: result });
});

app.listen(process.env.port || 3000);

console.log("Running at localhost port 3000");
