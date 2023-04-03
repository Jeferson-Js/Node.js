const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);
routes.get("/getTaskById/:id", TaskController.getTaskById);
routes.post("/updateOne/:id", TaskController.upData);

module.exports = routes;
