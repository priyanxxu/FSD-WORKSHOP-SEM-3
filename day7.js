const http = require("http");

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "X-Powered-By": "Node.js"
  });
  res.end("Hello World");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log("http://localhost:3000");
});