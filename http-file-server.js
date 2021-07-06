const fs = require("fs");
const http = require("http");

const port = Number(process.argv[2]);
const filePath = process.argv[3];

const server = http.createServer(function (req, res) {
  fileStream = fs.createReadStream(filePath).pipe(res);
});

server.listen(port);
