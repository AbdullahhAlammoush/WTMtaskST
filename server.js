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

//////////////////////////////////////////////

//routes middleware
app.use("/login", loginRouter);
app.use("/user", createNewUserRouter);
app.use("/w", wR);

/////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
