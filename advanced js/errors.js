const fs = require("fs/promises");

let fileData;

function readFile() {
//    fs.readFile('data.txt', function(error, fileData){
//       console.log(fileData.toString());
//       console.log('Parsing file done and ready for execution!');
//    });
  fs.readFile("data.txt").then(function (fileData) {
    console.log(fileData.toString());
    console.log("Parsing file done and ready for execution!");
  });
  console.log("Hi there!");
}

readFile();
