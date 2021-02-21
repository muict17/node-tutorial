const http = require("http");

// response pain text
// const server = http.createServer((request, response) => {
//   response.setHeader("Content-Type", "text/pain");
//   response.statusCode = 200;
//   response.write("<h1>Hello</h1>");
//   response.end();
// });

// server.listen(3030);

// response HTML
// const server = http.createServer((request, response) => {
//   response.setHeader("Content-Type", "text/html");
//   response.statusCode = 200;
//   response.write("<h1>Hello</h1>");
//   response.end();
// });
// server.listen(3030);

// response JSON
// const server = http.createServer((request, response) => {
//   const simpleStudent = {
//     name: "Jarupon",
//     age: 22,
//   };
//   response.setHeader("Content-Type", "application/json");
//   response.statusCode = 200;
//   response.write(JSON.stringify(simpleStudent));
//   response.end();
// });
// server.listen(3030);

// multiple path

// const server = http.createServer((request, response) => {
//   if (request.url === "/users") {
//     const userInfo = {
//       name: "Jarupong",
//       age: 22,
//     };
//     response.setHeader("Content-Type", "application/json");
//     response.write(JSON.stringify(userInfo));
//   } else if (request.url === "/html") {
//     response.setHeader("Content-Type", "text/html");
//     response.write("<h1>HTML Response</h1>");
//   } else {
//     response.setHeader("Content-Type", "text/pain");
//     response.write("Default Path");
//   }

//   response.statusCode = 200;
//   response.end();
// });

// server.listen(3030);

// send the data
const server = http.createServer((request, response) => {
  console.log("method: ", request.method);
  if (request.method === "POST") {
    console.log("hello", result);
    let temp = "";

    request.on("data", (data) => {
      const chunkData = new Buffer.from(data).toString();
      temp += chunkData;
      console.log("chunk data", new Buffer.from(data).toString());
    });

    request.on("end", () => {
      console.log("end", temp);
      response.setHeader("Content-Type", "text/pain");
      response.write("Response: " + temp);
      response.statusCode = 200;
      response.end();
    });
  }
});

server.listen(3030);
