const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("DB is good to go");
  })
  .catch((err) => {
    console.log(err);
  });
