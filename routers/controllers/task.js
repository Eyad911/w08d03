const taskModel = require('./../../db/models/task');
const createTask = (req, res) => {
  const { task,userId } = req.body;
  const newTask = new taskModel({
    task,
    userId,
  });
  newTask
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const getTask = (req, res) => {
    taskModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const getTaskById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    taskModel
    .findById(id).exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
module.exports = {
    createTask,
    getTask,
    getTaskById
};
