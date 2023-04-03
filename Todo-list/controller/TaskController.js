const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find({});
    return res.render("index", { taskList, task: null });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  const task = req.body;
  try {
    await Task.create(task);
    res.status(201);
    return res.redirect("/");

  } catch (error) {
    res.status(500).send("Error creating task: " + error.message);
  }
};

const getTaskById = async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id });
  const taskList = await Task.find({});
  res.render("index", { task: task, taskList: taskList });
};


const upData = async (req, res) => {
  const task = req.body;
  await Task.updateOne({ _id: req.params.id }, task);
  res.redirect("/");
};


module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  upData,
};
