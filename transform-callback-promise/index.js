const fs = require("fs");

// callback
// fs.readFile("fileOne.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log("result from file one:", data);
//   console.log("\n");
// });

// transform callback to promise

function readFilePromise(fileName, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, options, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

module.exports = readFilePromise;

// readFilePromise("fileOne.txt", { encoding: "utf-8" }).then((data) => {
//   console.log("transform callback to promise");
//   console.log("result", data);
// });

async function readWithAsyncAwait() {
  const result = await readFilePromise("fileOne.txt", { encoding: "utf-8" });
  console.log("result from async await");
  console.log("result", result);
}

// readWithAsyncAwait();
