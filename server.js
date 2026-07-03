const http = require("http");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = require("./src");

app.use(morgan("dev"));
app.use(express.json());

const apiRoutes = require("./src/routes/index");

app.use("/api", apiRoutes);

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});
