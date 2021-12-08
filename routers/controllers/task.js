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

const getTasks = (req, res) => {
    taskModel
      .find({ userId: req.token.id, isDelete: false })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "There is no todos yet!!" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };


  const getUserTasks = (req, res) => {
    const { id } = req.params;
  
    taskModel
      .find({ userId: id, isDelete: false })
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: "There is no todos yet!!" });
        }
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  };


const getTask = (req, res) => {
    taskModel
    .find({isDelete: false})
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
    .findByIdAndUpdate({ _id: id, userId: req.token.id, deleted: false },{ isDelete: true },{new: true}).exec()
    .then((result) => {
        // console.log(result);
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
    .findByIdAndUpdate({ _id: id, userId: req.token.id, deleted: false },
        { task },
        { new: true }).exec()
    .then((result) => {
        // console.log(result);
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
    updateTask,
    getTasks,
    getUserTasks
};
