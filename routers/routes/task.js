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

taskRouter.post("/task",authentication,authorization,createTask);
taskRouter.get("/task/:id", getTaskById);

// admin
taskRouter.get("/tasks", getTask);
taskRouter.get("/deltask", authentication, authorization, getDeletedTask);
taskRouter.delete("/delete/:id", deletedTask);
taskRouter.put("/task/:id", authentication, authorization, updateTask);
module.exports = taskRouter;
