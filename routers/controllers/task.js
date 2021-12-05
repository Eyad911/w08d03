const taskModel = require('./../../db/models/task');
const createTask = (req, res) => {
  const { task,userId,isDelete } = req.body;
  const newTask = new taskModel({
    task,
    userId: req.token.id ,
    
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

const getDeletedTask = (req, res) => {
    taskModel
    .find({})
    .then((result) => {
        // console.log(result);
        result.filter(item=>{
            if(item.isDelete == true)
            res.status(200).json(item);
        })
    //   res.status(200).json(result);
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

const deletedTask = (req, res) => {
    const { id } = req.params;
    
    console.log(id);
    taskModel
    .findByIdAndUpdate(id,{ isDelete: true }).exec()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const {task} = req.body
    
    console.log(id);
    taskModel
    .findByIdAndUpdate(id,{ task }).exec()
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



module.exports = {
    createTask,
    getTask,
    getTaskById,
    getDeletedTask,
    deletedTask,
    updateTask
};
