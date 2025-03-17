const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser

const placesRoutes = require("./routes/places-routes"); // import places-routes.js

const app = express(); // create an Express application instance

// req (request) → The incoming request from the client
// res (response) → The response object to send data back to the client
// next() → Calls the next middleware in the stack

app.use("/api/places", placesRoutes); // use placesRoutes as middleware, all routes inside placesRoutes are prefixed with /api/places

app.use((error, req, res, next) => {
  // this middleware function will be executed for any request that has an error
  if (res.headerSent) {
    return next(error); // if the response was already sent, the error is passed to another potential error handler if any
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5001);
