import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "one of the most famous sky scrapers in the world!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0p2yyTbP2wC5cS-FmtNwtX9r1TeePyjq3xQ&s",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0p2yyTbP2wC5cS-FmtNwtX9r1TeePyjq3xQ&s",
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
