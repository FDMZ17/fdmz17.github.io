const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/"), (_, res, next) => {});

app.listen(8080)
