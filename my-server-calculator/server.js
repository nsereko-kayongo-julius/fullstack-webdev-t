const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var number1 = Number(req.body.num1);
  var number2 = Number(req.body.num2);
  var sum = number1 + number2;
  console.log(req.body);
  res.send(`your sum is ${sum}`);
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
