const userModel = require("../database/models/users");

const rolesFunc = (req, res) => {
  const role = req.body.role;
  const id = req.body._id;
  const roleAdding = new userModel({
    role,
  });
  roleAdding
    .save()
    .then((result) => {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "the role was added", result: result });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "nothing was added", result: err });
    });
};
module.exports = rolesFunc;
