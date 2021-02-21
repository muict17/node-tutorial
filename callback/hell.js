const fs = require("fs");

// random process flow result
// const fs = require("fs");

// fs.readFile("fileOne.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log("result from file one:", data);
//   console.log("\n");
// });

// fs.readFile("fileTwo.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log("result from file two:", data);
// });

// const sum = 1 + 4;
// console.log("sum:", sum);

// sequence process flow result
// fs.readFile("fileOne.txt", { encoding: "utf-8" }, (err, data) => {
//   console.log("result from file one:", data);
//   console.log("\n");
//   fs.readFile("fileTwo.txt", { encoding: "utf-8" }, (err, data) => {
//     console.log("result from file two:", data);
//   });
// });

// const sum = 1 + 4;
// console.log("sum:", sum);

// callback hell

fs.readFile("fileOne.txt", { encoding: "utf-8" }, (err, data) => {
  console.log("result from file one:", data);
  console.log("\n");
  fs.readFile("fileTwo.txt", { encoding: "utf-8" }, (err, data) => {
    console.log("result from file two:", data);
    console.log("\n");

    fs.readFile("fileThree.txt", { encoding: "utf-8" }, (err, data) => {
      console.log("result from file three:", data);
    });
  });
});
