const mongoose = require("mongoose");

const task = new mongoose.Schema({
  task: { type: String, required: true },
  isDelete: { type: Boolean ,default: false},
  isComplet:{ type: Boolean,default: false},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", task);