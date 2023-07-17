const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const serverless = require("serverless-http");

require("dotenv").config();
const PORT = process.env.REACT_APP_PORT || 5555;

const bookController = require("./controllers/books.js");

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.send(200);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  //   console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use("/books", bookController);

module.exports.handler = serverless(app);
