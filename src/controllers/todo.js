const ToDoService = require("../services/todo");

const todoControllers = {
  getAllToDos: async (req, res) => {
    try {
      const status = req.query.status;
      const result = await ToDoService.getAllToDos(status);
      return res.status(result.statusCode).json({
        success: result.success,
        data: result.data,
        message: result.message,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  createToDo: async (req, res) => {
    try {
      const result = await ToDoService.createToDo(req.body);
      return res.status(result.statusCode).json({
        success: result.success,
        data: result.data,
        message: result.message,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  changeStatus: async (req, res) => {
    try {
      const result = await ToDoService.changeStatus({
        id: req.params.id,
        status: req.body.status,
      });
      return res.status(result.statusCode).json({
        success: result.success,
        data: result.data,
        message: result.message,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },

  deleteToDo: async (req, res) => {
    try {
      const result = await ToDoService.deleteToDo(req.params.id);
      return res.status(result.statusCode).json({
        success: result.success,
        data: result.data,
        message: result.message,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  },
};

module.exports = todoControllers;
