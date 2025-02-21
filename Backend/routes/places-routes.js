const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    address: "20 W 34th St, New York, NY 10118, United States",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  // :pid is a route parameter, so Express will extract whatever value appears in that position of the URL
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided ID :(");
    error.code = 404;
    return next(error); // this will be caught by the error handling middleware
  }

  res.json({ place }); // { place } is the same as { place: place } if the key and the value have the same name
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error(
      "Could not find a place for the provided user ID :("
    );
    error.code = 404;
    return next(error); // this will be caught by the error handling middleware
  }
  res.json({ place });
});

module.exports = router;
