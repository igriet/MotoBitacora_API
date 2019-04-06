"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var v1_1 = require("./router/v1");
var main_1 = require("./config/main");
var app = express();
mongoose.connect(main_1.default.db);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use(helmet());
app.use(cors());
v1_1.default(app);
var server;
if (process.env.NODE_ENV !== main_1.default.test_env) {
    server = app.listen(main_1.default.port, function () {
        console.log("sever listening on port " + main_1.default.port);
    });
}
else {
    server = app.listen(main_1.default.test_port, function () {
        console.log("server listening on port " + main_1.default.test_port);
    });
}
exports.default = server;
//# sourceMappingURL=server.js.map