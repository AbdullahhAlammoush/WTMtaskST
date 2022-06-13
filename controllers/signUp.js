const { model } = require("mongoose");
const userModel = require("../database/models/users");
const tokenModel = require("../database/models/tok");

const signUp = (req, res, next) => {
  const { firstName, lastName, email, password, token } = req.body;
  const tokenn = req.headers.authorization.split(" ").pop();
  // const tokLocal = localStorage.setItem("token", tokenn);
  const user = new userModel({
    firstName,
    lastName,
    email,
    password,
    token,
  });
  user
    .save()
    .then((result) => {
      if (result) {
        const tok = new tokenModel({
          token,
          email: email,
        });
        tok
          .save()
          .then((result) => {
            console.log(result);
            next;
          })
          .catch((err) => {
            console.log(err);
            next;
          });
      }
      res.status(201).json({
        success: true,
        message: "successful",
        result: result,
        token: tokenn,
      });
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
