const axios = require("axios");

const WeatherApi = (req, res) => {
  const location = req.body.location;
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=30.5852&lon=36.2384&appid=353e820a39828bb2da1c36428b126352"
    )
    .then((result) => {
      console.log(result.data);
      // const any=result.data
      res.status(200).json({ result: result.data });
      // setLocation(result.data.current.location.region);
    })
    .catch((err) => {
      console.log(err);
    });
};

const WeatherApiForACity = (req, res) => {
  const location = req.body.city;
  axios
    .get(
      `http://api.weatherstack.com/current?access_key=836d384af7e6305566442554a1e4e15f&query=${location}`
    )
    .then((result) => {
      console.log(result.data);
      // const any=result.data
      res.status(200).json({ result: result.data });
      // setLocation(result.data.current.location.region);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { WeatherApi, WeatherApiForACity };
