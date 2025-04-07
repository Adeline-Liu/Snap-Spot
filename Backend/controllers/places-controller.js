const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const getCoordsForAddress = require("../util/location");

let DUMMY_PLACES = [
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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided ID :(", 404)
    ); // this will be caught by the error handling middleware with parameter error
  }

  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find a place for the provided user ID :(", 404)
    ); // this will be caught by the error handling middleware with parameter error
  }
  res.json({ places });
};

// get requests don't have a body, but post requests do

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // throwing exceptions in async function wouldn't work correctly
    return next(
      new HttpError(
        "Some of the inputs are invalid. Please double-check your data and try again.",
        422
      )
    );
    // return res.status(422).json({ errors: errors.array() });
  }

  // get the data from the request body and store it in variables
  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (err) {
    return next(err);
  }

  const createdPlace = {
    id: uuidv4(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace); // add the new place at the end, unshift() would add it at the beginning

  res.status(201).json({ place: createdPlace });
};

// patch requests have a body
const updatePlace = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // console.log(errors);
    throw new HttpError(
      "Some of the inputs are invalid. Please double-check your data and try again.",
      422
    );
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  const updatedPlace = { ...DUMMY_PLACES.find((p) => p.id === placeId) };
  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;

  if (!DUMMY_PLACES.find((p) => p.id === placeId)) {
    throw new HttpError("Could not find a place for this ID.", 404);
  }

  // filter gives a new array, it doesn't change the original array
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  // if filter returns true, the element is kept, if it returns false, the element is removed
  res.status(200).json({ message: "Deleted place." });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
