const fs = require("fs");
const path = require("path");
const currentDirectory = () => {
  return __dirname;
};
const excludeFileList = ["node_modules"];
const fileList = [];
const fetchAllFilePaths = directory => {
  if (!directory) {
    directory = currentDirectory();
  }

  if (!fs.existsSync(directory)) {
    console.log("No such directory");
    return;
  }
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    if (!excludeFileList.includes(file)) {
      if (fs.lstatSync(path.join(directory, file)).isDirectory()) {
        fetchAllFilePaths(path.join(directory, file));
      } else {
        fileList.push(path.join(directory, file));
      }
    }
  });

  fileList.forEach(file => console.log(file));

  return fileList;
};

module.exports = fetchAllFilePaths(currentDirectory);
