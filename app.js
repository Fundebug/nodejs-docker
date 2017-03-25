var express = require("express");
var app = express();

app.get("/", function(req, res)
{
    res.send("Hello Fundebug!\n");
});

app.listen(3000);
