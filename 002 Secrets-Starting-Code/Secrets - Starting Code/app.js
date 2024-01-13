//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require("mongoose-encryption");
//const md5 = require("md5");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

//level 2 security using mongoose-encryption
// userSchema.plugin(encrypt, {
//   secret: process.env.SECRET,
//   encryptedFields: ["password"],
// });

const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const newUser = new User({
      email: req.body.username,
      password: hash,
    });
    newUser
      .save()
      .then(() => {
        res.render("secrets");
        console.log("user sucessfully added");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  //md5 hashing level 3 authentication
  // const newUser = new User({
  //   email: req.body.username,
  //   password: md5(req.body.password),
  // });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  //const password = md5(req.body.password);
  const password = req.body.password;

  User.findOne({
    email: username,
  })
    .then((foundUser) => {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function (err, result) {
          if (result === true) {
            res.render("secrets");
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
