const express = require("express");
require("dotenv").config();

require("./database/db");

const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(express.json());

// import Routerss
const db = require("./database/db");
app.use(cors());

//import routes
const loginRouter = require("./routes/login");
const createNewUserRouter = require("./routes/signUpR");
const wR = require("./routes/weatherR");
const sendrouter = require("./routes/send");
const WeatherApiForACity = require("./routes/weatherCityR");
const tokenRouter = require("./routes/tokR");
//////////////////////////////////////////////

//routes middleware
app.use("/login", loginRouter);
app.use("/user", createNewUserRouter);
app.use("/send", sendrouter);
app.use("/w", wR);
app.use("/wCity", WeatherApiForACity);
app.use("/token", tokenRouter);

/////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
