const express = require("express");
const {  createTask,
    getTask, getTaskById} = require("./../controllers/task");
const taskRouter = express.Router();
const {authentication}= require("./../middleware/authentication");
const {authorization}= require("./../middleware/authorization");


taskRouter.post("/task", createTask);
taskRouter.get("/task/:id", createTask);


// admin
taskRouter.get("/tasks",authentication,authorization, getTask);

module.exports = taskRouter;
