"use strict";
let express         = require("express"),
    fs              = require("fs"),
    app             = express(),
    logger          = require("morgan"),
    bodyParser      = require("body-parser"),
    cookieParser    = require("cookie-parser"),
    moment          = require("moment"),
    compression     = require("compression"),
    helmet          = require('helmet'),
    csp             = require("helmet-csp"),
    nocache         = require('nocache'),
    sockets         = require("socket.io")(9200);

app
    .use(helmet())
    .use(nocache())
    .use(compression({ threshold: 0 }))
    .use(logger('dev'))
    .use(bodyParser.urlencoded({extended:false}))
    .use(bodyParser.json())
    .use(cookieParser())
    .use("/js", express.static("js"))
    .use("/css", express.static("css"))
    .use("/templates", express.static("templates"))
    .use("/node_modules", express.static("node_modules"))
    .use((req,res,next) => {
        res
            .header("Strict-Transport-Security","max-age=31536000; includeSubDomains; preload")
            .header("Content-Security-Policy","default-src 'self';connect-src 'self' ws://" + req.hostname + ":9200");
        next();
    })
    .use(csp({
        directives:{
            scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "ajax.googleapis.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "ajax.googleapis.com"]
        }
    }));

app.options("*",(req,res) => {
    res
        .header("Access-Control-Allow-Methods",setting['allow-method'].toString())
        .header("Access-Control-Allow-Origin","*")
        .header("Access-Control-Allow-Headers","Accept, Authorization, Content-Type")
        .status(204)
        .end();
});

app.get("*",(req,res) => {
   res.sendFile(__dirname + "/templates/index.html");
});

require("./sockets/main.socket")(sockets);

app.listen(9100,() => {
    console.log("SERVER::START");
});