const fs = require("fs");

// blocking
console.log("blocking I/O");
const result = fs.readFileSync("file.txt", { encoding: "utf-8" });

console.log("result", result);
const sum = 1 + 3;
console.log(sum);

console.log("\n");

// non-blocking
console.log("non-blocking I/O");
fs.readFile("file.txt", { encoding: "utf-8" }, (err, data) => {
  console.log("result", data);
});
const resultA = 1 + 3;
console.log(resultA);
