const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const HttpError = require("./models/http-error"); // import HttpError from http-error.js

const placesRoutes = require("./routes/places-routes"); // import places-routes.js
const usersRoutes = require("./routes/users-routes"); // import users-routes.js

const app = express(); // create an Express application instance

// req (request) → The incoming request from the client
// res (response) → The response object to send data back to the client
// next() → Calls the next middleware in the stack

app.use(bodyParser.json()); // use body-parser as middleware to parse incoming request bodies in a middleware before your handlers, available under the req.body property

app.use("/api/places", placesRoutes); // use placesRoutes as middleware, all routes inside placesRoutes are prefixed with /api/places
app.use("/api/users", usersRoutes); // use usersRoutes as middleware, all routes inside usersRoutes are prefixed with /api/users

// this middleware function only will be executed when no response was sent from any of the previous routes
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  // this middleware function will be executed for any request that has an error
  if (res.headerSent) {
    return next(error); // if the response was already sent, the error is passed to another potential error handler if any
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5001);
