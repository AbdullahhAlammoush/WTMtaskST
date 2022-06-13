const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  email: { type: String, ref: "User" },
  token: { type: String, ref: "User" },
});

module.exports = mongoose.model("Tok", tokenSchema);
