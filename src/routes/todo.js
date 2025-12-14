const todoControllers = require("../controllers/todo");
const { getRequestLogs } = require("../middlewares/getRequestLogs");
const router = require("express").Router();

router.get("/", getRequestLogs, todoControllers.getAllToDos);
router.post("/", getRequestLogs, todoControllers.createToDo);
router.patch("/:id", getRequestLogs, todoControllers.changeStatus);
router.delete("/:id", getRequestLogs, todoControllers.deleteToDo);

module.exports = router;
