const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser

const placesRoutes = require("./routes/places-routes"); // import places-routes.js

const app = express(); // create an Express application instance

// req (request) → The incoming request from the client
// res (response) → The response object to send data back to the client
// next() → Calls the next middleware in the stack

// app.use(bodyParser.urlencoded({ extended: false })); // parse all incoming requests if are urlencoded data

// app.post("/user", (req, res, next) => {
//   res.send("<h1>User: " + req.body.username + "</h1>");
// });

// // for request to this URL "/", this function will be executed
// app.get("/", (req, res, next) => {
//   res.send(
//     '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
//   );
// });

app.use(placesRoutes); // use placesRoutes as middleware

app.listen(5001);
