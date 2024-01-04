const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(req.body.cityName);
  const city = req.body.cityName;
  const apiKey = "0c445123cdc44ae0d5658fcae7518f10";
  const unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  https.get(url, function (response) {
    console.log(response.statusCode);
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherIcon = weatherData.weather[0].icon;
      const iconUrl = ` https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      console.log(weatherData);
      res.write(
        `<h1> The temperature in ${req.body.cityName} is ${temp} degress </h1>`
      );
      res.write(`<img src=${iconUrl}>`);
    });
  });
});

// const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=uganda&appid=0c445123cdc44ae0d5658fcae7518f10";
//   https.get(url, function (response) {
//     console.log(response.statusCode);
//     response.on("data", function (data) {
//       const weatherData = JSON.parse(data);
//       const temp = weatherData.main.temp;
//       const weatherIcon = weatherData.weather[0].icon;
//       const iconUrl = ` https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
//       console.log(weatherData);
//       res.write(`<h1> The temperature is ${temp} kelvin in Uganda </h1>`);
//       res.write(`<img src=${iconUrl}>`);
app.listen(3000, function () {
  console.log("server running on port 3000");
});
