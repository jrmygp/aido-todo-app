const Service = require("../service");
const ToDoRepository = require("../../repositories/todo");

class TodoService extends Service {
  static createToDo = async (form) => {
    try {
      if (!form.title) {
        return this.handleError({
          message: "Title can't is required",
          statusCode: 400,
        });
      }
      if (!["pending", "done"].includes(form.status)) {
        return this.handleError({
          message: "Status must be pending or done",
          statusCode: 400,
        });
      }

      const newToDo = ToDoRepository.create(form);

      return this.handleSuccess({
        data: newToDo,
        message: "To Do Added",
      });
    } catch (error) {
      return this.handleError();
    }
  };

  static getAllToDos = async (status) => {
    try {
      const todos = ToDoRepository.findAll(status);

      return this.handleSuccess({
        data: todos,
        message: "Todos Found",
      });
    } catch (error) {
      return this.handleError();
    }
  };

  static changeStatus = async (form) => {
    try {
      const todo = ToDoRepository.findById(form.id);

      if (!todo) {
        return this.handleError({
          message: `To do with id ${form.id} not found`,
        });
      }

      if (!["pending", "done"].includes(form.status)) {
        return this.handleError({
          message: "Status must be pending or done",
          statusCode: 400,
        });
      }

      const updatedToDo = ToDoRepository.updateStatus(form.id, form.status);

      return this.handleSuccess({
        data: updatedToDo,
        message: "To Do Updated",
      });
    } catch (error) {
      return this.handleError();
    }
  };

  static deleteToDo = async (id) => {
    try {
      const todo = ToDoRepository.findById(id);

      if (!todo) {
        return this.handleError({
          message: `To do with id ${id} not found`,
        });
      }

      const deletedToDo = ToDoRepository.delete(id);

      return this.handleSuccess({
        data: deletedToDo,
        message: "To Do Deleted",
      });
    } catch (error) {
      return this.handleError();
    }
  };
}

module.exports = TodoService;
