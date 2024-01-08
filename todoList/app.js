const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const items = ["write code", "debug code", "commt code"];
const workitems = [];
app.use(express.static("public"));
app.get("/", (req, res) => {
  const day = date.getDate();
  res.render("list", { listTitle: day, newitem: items });
});

app.post("/", (req, res) => {
  const item = req.body.listitem;
  console.log(req.body);
  if (req.body.list === "work") {
    workitems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);

    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "work List", newitem: workitems });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
