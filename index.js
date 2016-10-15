var express = require('express');
var app = express();
var moment = require('moment');

app.get("/", function(req, res){
  res.send("Usage: /:date");
});

app.get("/:date", function(req, res){
  var date = moment(req.params.date);
  if(!date.isValid()){
    date = moment.unix(req.params.date);
  }
  var display = {
    "unix" : date.unix(),
    "natural" : date.format("MMMM D, Y")
  };
  res.send(display);
});

app.listen(process.argv[2] || 1337);
