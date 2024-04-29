import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  // if nothing in the list, then render share a new place button
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>
            No places found. Maybe create one?
            <button>Share Place</button>
          </h2>
        </Card>
      </div>
    );
  }

  // otherwise render the items
  return (
    <ul className="class-list">
      {props.items.map((place) => (
        // map every place in the list to a PlaceItem component
        <PlaceItem
          key={place.id}
          id={place.id}
          imgae={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;