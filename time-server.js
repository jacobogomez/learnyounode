const net = require("net");

const port = Number(process.argv[2]);

function printCurrentDate() {
  const dateObject = new Date();

  let year = dateObject.getFullYear();
  let month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
  let day = ("0" + dateObject.getDate()).slice(-2);
  let hours = ("0" + dateObject.getHours()).slice(-2);
  let minutes = ("0" + dateObject.getMinutes()).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const server = net.createServer((socket) => {
  socket.write(printCurrentDate() + "\n");
  socket.end();
});

server.listen(port);
