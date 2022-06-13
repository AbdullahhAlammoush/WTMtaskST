const express = require("express");

const { resetPass } = require("../controllers/forgotPass");

const tokenRouter = express.Router();
//main route is /token
tokenRouter.get("/tok", resetPass);

module.exports = tokenRouter;
