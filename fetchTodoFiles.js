const fs = require("fs");
const path = require("path");

const filesAndFoldersExclusionList = ["node_modules", ".git", "todo_search"];
const fileList = [];

exports.fetchAllFilePaths = directory => {

  if (!fs.existsSync(directory)) {
    console.log("No such directory");
    return;
  }
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    if (!filesAndFoldersExclusionList.includes(file)) {
      const currentFileOrFolderPath = path.join(directory, file);
      if (fs.lstatSync(currentFileOrFolderPath).isDirectory()) {
        this.fetchAllFilePaths(currentFileOrFolderPath);
      } else {
        if (
          fs
            .readFileSync(currentFileOrFolderPath)
            .toString()
            .includes("TODO")
        ) {
          fileList.push(currentFileOrFolderPath);
        }
      }
    }
  });

  return fileList;
};
