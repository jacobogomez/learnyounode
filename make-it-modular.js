const mymodule = require("./mymodule.js");

const directoryPath = process.argv[2];
const fileExtension = process.argv[3];

mymodule(directoryPath, fileExtension, (err, data) => {
  if (err) {
    console.log(err);
  }
  data.forEach((file) => {
    console.log(file);
  });
});
