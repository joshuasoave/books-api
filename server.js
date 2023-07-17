const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

require("dotenv").config();
const PORT = process.env.PORT || 5555;

const bookController = require("./controllers/books.js");

app.options("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Length, X-Requested-With"
  );
  res.sendStatus(200);
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  next();
});

app.use("/books", bookController);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
