const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h2> contact me At Nserekolauv101@gmail.com</h2>");
});

app.get("/about", function (req, res) {
  res.send(
    "<h3> name: Nsereko julius <br> Age : 43 <br> occupation: fullstack web dev</h3>"
  );
});

app.listen(3000, function () {
  console.log("server started");
});
