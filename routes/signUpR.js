const express = require("express");

const { signUp } = require("../controllers/signUp");

const createNewUserRouter = express.Router();
//main route is /user
createNewUserRouter.post("/signUp", signUp);

module.exports = createNewUserRouter;
