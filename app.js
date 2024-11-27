const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/route.todo");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

connectMongodb();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);

module.exports = app;
