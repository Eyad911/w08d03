const express = require("express");
const { create, getRoles } = require("./../controllers/role");
const roleRouter = express.Router();

roleRouter.post("/createRole", create);
roleRouter.get("/role", getRoles);

module.exports = roleRouter;
