const http = require("http");

const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
  const baseUrl = req.protocol + "://" + req.headers.host;
  const requestUrl = new URL(req.url, baseUrl);

  const timestamp = new Date(requestUrl.searchParams.get("iso"));
  let responseObject;

  if (requestUrl.pathname === "/api/parsetime") {
    responseObject = {
      hour: timestamp.getHours(),
      minute: timestamp.getMinutes(),
      second: timestamp.getSeconds(),
    };
  }
  if (requestUrl.pathname === "/api/unixtime") {
    responseObject = {
      unixtime: timestamp.getTime(),
    };
  }

  if (responseObject) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseObject));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);
