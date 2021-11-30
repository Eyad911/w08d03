const express = require("express");
const {
  createTask,
  getTask,
  getTaskById,
  getDeletedTask,
  deletedTask,
  updateTask,
} = require("./../controllers/task");
const taskRouter = express.Router();
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");

taskRouter.post("/task", createTask);
taskRouter.get("/task/:id", getTaskById);

// admin
taskRouter.get("/tasks", authentication, authorization, getTask);
taskRouter.get("/deltask", authentication, authorization, getDeletedTask);
taskRouter.get("/delete/:id", deletedTask);
taskRouter.put("/task/:id", updateTask);
module.exports = taskRouter;
