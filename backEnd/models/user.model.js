const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    genre: String,
    city : String,
    country : String,
    password1: String,
    password2: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;