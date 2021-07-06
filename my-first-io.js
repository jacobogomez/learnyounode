const fs = require("fs");

const filePath = process.argv[2];

const numberOfNewLines =
  fs.readFileSync(filePath, "utf8").split("\n").length - 1;

console.log(numberOfNewLines);
