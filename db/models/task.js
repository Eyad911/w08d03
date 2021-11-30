const mongoose = require("mongoose");

const task = new mongoose.Schema({
  task: { type: String, required: true },
  isDelete: { type: Boolean, required: true ,default: false},
  role: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", task);