const http = require("http");

const urls = process.argv.slice(2);

let responses = new Array(urls.length).fill("");
let completedRequests = 0;

function collectFromUrl(index) {
  http
    .get(urls[index], (response) => {
      response.setEncoding("utf8");
      response.on("data", (data) => {
        responses[index] += data;
      });
      response.on("error", console.error);
      response.on("end", () => {
        completedRequests++;
        if (completedRequests === urls.length) {
          responses.forEach((response) => console.log(response));
        }
      });
    })
    .on("error", console.error);
}

for (let i = 0; i < urls.length; i++) {
  collectFromUrl(i);
}
