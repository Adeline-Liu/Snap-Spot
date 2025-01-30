import React from "react";

import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

const PlaceList = (props) => {
  // if nothing in the list, then render share a new place button
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <div className="place-list__no-places">
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </div>
        </Card>
      </div>
    );
  }

  // otherwise render the items
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        // map every place in the list to a PlaceItem component
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
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
