import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "one of the most famous sky scrapers in the world!",
    imageUrl:
      "data:image/jpeg;base64,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",

    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "one of the most famous sky scrapers in the world!",
    imageUrl:
      "data:image/jpeg;base64,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",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
