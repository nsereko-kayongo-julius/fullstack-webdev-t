const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const bodyParser = require("body-parser");
const https = require("node:https");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", function (req, res) {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  console.log(fname, lname, email);

  //data
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };
  const jsondata = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/a840d001b0";
  const options = {
    method: "POST",
    auth: "julius1:024028c17b260cf34dfe38a9f010b2a2-us17",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsondata);
  request.end();
}),
  app.post("/failure", function (req, res) {
    res.redirect("/");
  });
app.listen(process.env.PORT || 3000, function () {
  console.log("server runnin on port 3000");
});

//Api key
//024028c17b260cf34dfe38a9f010b2a2-us17

//list id
//a840d001b0
