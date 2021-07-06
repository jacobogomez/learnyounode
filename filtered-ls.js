const fs = require("fs");
const path = require("path");

const directoryPath = process.argv[2];
const fileExtension = "." + process.argv[3];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log(err);
  }
  files.forEach((file) => {
    if (path.extname(file) === fileExtension) {
      console.log(file);
    }
  });
});
