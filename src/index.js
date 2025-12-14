const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const PORT = 8080;

// Logging
app.use((req, res, next) => {
  const now = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const loggingFormat = `${req.method} ${req.path} ${now}`;
  fs.appendFileSync(`${__dirname}/../.log`, loggingFormat + "\n");

  next();
});

app.listen(PORT, () => {
  console.log("Listening in Port: ", PORT);
});
