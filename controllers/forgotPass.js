const usersModel = require("../database/models/users");
const recoverEmail = (req, res) => {
  const email = req.body.email;
  const answer = req.body.answer;
  usersModel.findOne({ email }).then(async (result) => {
    if (!result) {
      res.status(404).json({ message: "The email doesn't exist", res: result });
    } else if (result) {
      console.log("type in the answer");
      if (answer) {
        //send an email
      }
    }
  });
};

module.exports = recoverEmail;
