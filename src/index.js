const express = require("express");
const app = express();
const { todoRoutes } = require("./routes");

app.use(express.json());

const PORT = 8080;

app.use("/todos", todoRoutes);

app.use("/", (req, res, next) => {
  res.send("<h1>welcome to AIDO assignment</h1>");
});

app.listen(PORT, () => {
  console.log("Listening in Port: ", PORT);
});
