var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//routes
var userRoutes = require("./routes/userRoutes.js");

var app = express();

//setup for directories
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

//body parser setup
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next){
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
  next();
});

//routes
app.use("/user", userRoutes);

app.use(function(req, res, next){
  res.end();
});

//listener
port = process.argv[2] || 3001;
app.listen(port, function(){
  console.log("Listening on port " + port);
});

