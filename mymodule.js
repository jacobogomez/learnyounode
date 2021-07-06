const fs = require("fs");
const path = require("path");

module.exports = function (directoryPath, fileExtension, callback) {
  const extension = "." + fileExtension;
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err);
    } else {
      let filenamesArray = [];
      files.forEach((file) => {
        if (path.extname(file) === extension) {
          filenamesArray.push(file);
        }
      });
      return callback(null, filenamesArray);
    }
  });
};
