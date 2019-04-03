var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.post("/loginUser", function(req, res) {
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);
  console.log(req.path);
  var user = {
    userId: "null",
    userName: "null",
    password: "null",
    email: "praga@gmail.com",
    phone: "2568937230498",
    otpCode: "null"
  };
  //res.write("user")
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  res.write(JSON.stringify(user));
  res.end();
});

app.post("/emailOrPhone", function(req, res) {
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);
  console.log(req.path);
  res.end("yes");
});

app.post("/challenge", function(req, res) {
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("User name = " + user_name + ", password is " + password);
  console.log(req.path);
  res.end("yes");
});
app.listen(8080, function() {
  console.log("Started on PORT 8080");
});
