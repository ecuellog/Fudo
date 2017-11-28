var express = require("express");
var path = require("path");
//var bodyParser = require("body-parser");

//server routes
var index = require("./routes/index.js");

var app = express();

app.set("views", path.join(__dirname, "public/views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//setup for directories
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))); // redirect bootstrap JS
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))); // redirect bootstrap CSS

//routes
app.use("/", index);

app.use(function(req, res, next){
  res.end();
});

//listener
port = process.argv[2] || 3001;
app.listen(port, function(){
  console.log("Listening on port " + port);
});

