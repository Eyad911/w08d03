const express = require("express");
const {  createTask,
    getTask, getTaskById,getDeletedTask} = require("./../controllers/task");
const taskRouter = express.Router();
const {authentication}= require("./../middleware/authentication");
const {authorization}= require("./../middleware/authorization");


taskRouter.post("/task", createTask);
taskRouter.get("/task/:id", getTaskById);




// admin
taskRouter.get("/tasks",authentication,authorization, getTask);
taskRouter.delete("/deltask",authentication,authorization, getDeletedTask);

module.exports = taskRouter;
