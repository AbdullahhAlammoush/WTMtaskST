const { model } = require("mongoose");
const userModel = require("../database/models/users");
const signUp = (req, res) => {
  const { firstName, lastName, age, country, email, password, role } = req.body;

  const user = new userModel({
    firstName,
    lastName,
    email,
    password,
    role,
  });
  user
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: "successful my G", result: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: `Server Error`,
        result: err,
      });
    });
};

module.exports = { signUp };
