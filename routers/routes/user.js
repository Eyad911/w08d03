const express = require("express");
const { Register, login } = require("./../controllers/user");
const userRouter = express.Router();
userRouter.post("/signUp", Register);
userRouter.post("/login", login);

module.exports = userRouter;
