const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const todos = [
  { id: 1, task: "Task one" },
  { id: 2, task: "Task two" },
  { id: 3, task: "Task three" },
];

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      success: true,
      method: req.method,
      data: todos,
    }),
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
