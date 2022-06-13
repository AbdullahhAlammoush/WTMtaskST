const userModel = require("../database/models/users");
const tokenModel = require("../database/models/tok");

const resetPass = (req, res) => {
  const email = req.body.email;

  userModel
    .find({ email: email })
    .then((result) => {
      if (result) {
        // tokenModel.find({ email: email }).then()
      }
      res.status(200).json({ success: true, result: result });
    })
    .catch((err) => {
      res.status(200).json({ success: false, result: err });
    });
};
module.exports = { resetPass };
