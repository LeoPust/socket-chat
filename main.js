"use strict";
let express         = require("express"),
    fs              = require("fs"),
    app             = express(),
    logger          = require("morgan"),
    bodyParser      = require("body-parser"),
    cookieParser    = require("cookie-parser"),
    moment          = require("moment"),
    compression     = require("compression"),
    sockets         = require("socket.io")(9200);

app
    .use(compression())
    .use(logger('dev'))
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use(cookieParser())
    .use("/js", express.static("js"))
    .use("/css", express.static("css"))
    .use("/templates", express.static("templates"))
    .use("/node_modules", express.static("node_modules"));

app.options("*",(req,res) => {
    res
        .header("Access-Control-Allow-Methods",setting['allow-method'].toString())
        .header("Access-Control-Allow-Origin","*")
        .header("Access-Control-Allow-Headers","Accept, Authorization, Content-Type")
        .status(204)
        .end();
});

app.get("/",(req,res) => {
   res.sendFile(__dirname + "/templates/index.html");
});

app.listen(9100,() => {
    console.log("SERVER::START");
});