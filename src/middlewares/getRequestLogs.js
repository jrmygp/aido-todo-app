const fs = require("fs");

const getRequestLogs = async (req, res, next) => {
  try {
    const now = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const loggingFormat = `${req.method} ${req.path} ${now}`;
    fs.appendFileSync(`${__dirname}/../../.log`, loggingFormat + "\n");

    next();
  } catch (error) {
    return res.status(500).json({
      message: "Middleware error!",
    });
  }
};

module.exports = { getRequestLogs };
