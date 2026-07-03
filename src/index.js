const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "test",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = app;
