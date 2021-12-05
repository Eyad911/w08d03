const express = require("express");
const { Register, login } = require("./../controllers/user");
const { authentication } = require("./../middleware/authentication");
const userRouter = express.Router();
userRouter.post("/signUp", Register);
userRouter.post("/login", login);

module.exports = userRouter;
