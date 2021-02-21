const fs = require("fs/promises");

fs.readFile("fileOne.txt", { encoding: "utf-8" })
  .then((data) => {
    console.log("data from file one: ", data);
    console.log("\n");

    fs.readFile("fileTwo.txt", { encoding: "utf-8" }).then((data) => {
      console.log("data from file two: ", data);
      console.log("\n");
    });
  })
  .catch((err) => {
    consoe.log("error", err);
  });
