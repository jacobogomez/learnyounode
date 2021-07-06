const http = require("http");
const url = process.argv[2];

http
  .get(url, (response) => {
    response.setEncoding("utf8");
    let collectedData = "";
    response.on("data", (data) => {
      collectedData += data;
    });
    response.on("error", console.error);
    response.on("end", () => {
      console.log(collectedData.length);
      console.log(collectedData);
    });
  })
  .on("error", console.error);
