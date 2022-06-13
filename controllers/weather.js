const axios = require("axios");

const WeatherApi = (req, res) => {
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=353e820a39828bb2da1c36428b126352"
    )
    .then((result) => {
      console.log(result.data);
      // setLocation(result.data.current.location.region);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = WeatherApi;
// ("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=353e820a39828bb2da1c36428b126352");
