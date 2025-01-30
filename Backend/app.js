const express = require("express"); // import express

const app = express(); // create an Express application instance

// req (request) → The incoming request from the client
// res (response) → The response object to send data back to the client
// next() → Calls the next middleware in the stack

app.use((req, res, next) => {
  let body = "";
  req.on("end", (chunk) => {
    const userName = body.split("=")[1];
    if (userName) {
      req.body = { name: userName };
    }
    next(); // call the next middleware in the stack
  });
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
});

app.use((req, res, next) => {
  if (req.body) {
    return res.send("<h1>" + req.body.name + "</h1>");
  }
  res.send(
    '<form action="/" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
  );
});

app.listen(5001);
