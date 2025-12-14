const generateUUID = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

let todos = [];

class ToDoRepository {
  create(todo) {
    const newTodo = {
      id: generateUUID(),
      title: todo.title,
      status: todo.status,
    };

    todos.push(newTodo);
    return newTodo;
  }

  findAll(status) {
    if (status) {
      return todos.filter((t) => t.status === status);
    }
    return todos;
  }

  findById(id) {
    return todos.find((t) => t.id === id) || null;
  }

  updateStatus(id, status) {
    const todo = this.findById(id);
    if (!todo) return null;

    todo.status = status;
    return todo;
  }

  delete(id) {
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return null;

    return todos.splice(index, 1)[0];
  }
}

module.exports = new ToDoRepository();
