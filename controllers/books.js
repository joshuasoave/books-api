const express = require("express");
const router = express.Router();
const axios = require("axios");
var bodyParser = require("body-parser");

require("dotenv").config();
const apiKey = process.env.REACT_APP_APIKEY;
// axios
//   .get(
//     `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
//   )
//   .then((response) => {
//     console.log("response ", response);
//   });

router.get("/currentFiction", (req, res) => {
  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
    )
    .then((response) => {
      res.send(response.data);
    });
});

module.exports = router;
