import React from "react";
import "./HobbyListing.scss";
import { HobbyInterface } from "../UserHobbyList/UserHobbyList";

interface HobbyListingInterface {
  hobby: HobbyInterface;
}

const HobbyListing = ({ hobby }: HobbyListingInterface) => {
  return (
    <span className="hobby-list__userHobbies-hobby">
      <p className="hobby-list__userHobbies-hobby-listing">{hobby.passion}</p>
      <p className="hobby-list__userHobbies-hobby-listing">{hobby.name}</p>
      <p className="hobby-list__userHobbies-hobby-listing">{hobby.date}</p>
    </span>
  );
};

export default HobbyListing;
