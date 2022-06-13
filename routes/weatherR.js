const express = require("express");
const WeatherApi = require("../controllers/weather");
const wR = express.Router();
wR.get("/", WeatherApi);
module.exports = wR;
