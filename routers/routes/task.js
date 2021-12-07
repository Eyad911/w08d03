const express = require("express");
const {
  createTask,
  getTask,
  getTaskById,
  getDeletedTask,
  deletedTask,
  updateTask,
  getTasks,
  getUserTasks
} = require("./../controllers/task");
const taskRouter = express.Router();
const { authentication } = require("./../middleware/authentication");
const { authorization } = require("./../middleware/authorization");



taskRouter.delete("/delete/:id",authentication, deletedTask);
taskRouter.post("/task",authentication,createTask);
taskRouter.get("/gettasks",authentication,getTasks);
taskRouter.get("/gettasks/:id",authentication,authorization,getUserTasks);
taskRouter.get("/task/:id", getTaskById);
taskRouter.put("/edittask/:id", authentication, updateTask);
// admin
taskRouter.get("/tasks",authentication,authorization, getTask);
taskRouter.get("/gettasks/:id",authentication,authorization,getUserTasks);

taskRouter.get("/deltask", authentication, authorization, getDeletedTask);


module.exports = taskRouter;
