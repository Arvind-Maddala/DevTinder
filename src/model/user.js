const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
    max: 99,
  },
  gender: {
    type: String,
  },
});

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;
