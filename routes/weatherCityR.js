const express = require("express");
const { WeatherApiForACity } = require("../controllers/weather");
const wR = express.Router();
wR.get("/", WeatherApiForACity);
module.exports = wR;
