const express = require("express");
const { send } = require("../controllers/nodemailer");
const sendrouter = express.Router();
sendrouter.post = ("/", send);
module.exports = sendrouter;
