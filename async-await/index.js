const fs = require("fs/promises");

const options = {
  encoding: "utf-8",
};
async function readAllThreeFilesSequence() {
  const fileOneResult = await fs.readFile("fileOne.txt", options);
  const fileTwoResult = await fs.readFile("fileTwo.txt", options);
  const fileThreeResult = await fs.readFile("fileThree.txt", options);

  console.log("result from file one:", fileOneResult);
  console.log("result from file two:", fileTwoResult);
  console.log("result from file three:", fileThreeResult);
}

async function readAllThreeFilesConcurrent() {
  const result = await Promise.all([
    fs.readFile("fileOne.txt", options),
    fs.readFile("fileTwo.txt", options),
    fs.readFile("fileThree.txt", options),
  ]);

  console.log("list Result: ", result);
}

const listFiles = ["fileOne.txt", "fileTwo.txt", "fileThree.txt"];

async function readFileFromListPath() {
  const listCall = listFiles.map((fileName) => fs.readFile(fileName, options));
  const result = await Promise.all(listCall);
  console.log("list Result: ", result);
}
// readAllThreeFilesSequence();
// readAllThreeFilesConcurrent();
// readFileFromListPath();
