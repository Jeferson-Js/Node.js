const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const taskList = await Task.find({})
    return res.render("index", { taskList });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createTask = async (req, res) => {
  const task = req.body;
  try {
    await Task.create(task);
    res.status(201).send('Task created successfully');
    return res.redirect("/");
  } catch (error) {
    res.status(500).send('Error creating task: ' + error.message);
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
