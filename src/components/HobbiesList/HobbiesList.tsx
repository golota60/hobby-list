import React from "react";
import "./HobbiesList.scss";
import { UserInterface, HobbyInterface } from "../UserHobbyList/UserHobbyList";
import Button from "../common/Button/Button";
import HobbyListing from "../HobbyListing/HobbyListing";
import TextInput from "../common/TextInput/TextInput";

interface HobbiesListInterface {
  user: UserInterface;
  handleAddHobby: () => void;
  className?: string;
  style?: {};
  hobby: HobbyInterface;
  setHobby: (e: HobbyInterface) => void;
}

const HobbiesList = ({
  user,
  handleAddHobby,
  className = "",
  style = {},
  hobby,
  setHobby,
}: HobbiesListInterface) => {
  return (
    <div className={`hobby-list__column ${className}`} style={style}>
      <span className="hobby-list__column-buttonContainer">
        <TextInput
          placeholder="Select passion level"
          value={hobby.passion}
          onChange={(e) => setHobby({ ...hobby, passion: e.target.value })}
        />
        <TextInput
          placeholder="Enter user hobby"
          value={hobby.name}
          onChange={(e) => setHobby({ ...hobby, name: e.target.value })}
        />
        <TextInput
          placeholder="Enter year"
          value={hobby.date}
          onChange={(e) => setHobby({ ...hobby, date: e.target.value })}
        />
        <Button
          className="hobby-list__column-button"
          showPlus
          onClick={handleAddHobby}
        >
          Add
        </Button>
      </span>
      <div className="hobby-list__userHobbies">
        {user.hobbies ? (
          user.hobbies.map((_hobby, _i) => (
            <HobbyListing hobby={_hobby} key={`${_hobby.name}${_i}`} />
          ))
        ) : (
          <span>Click a user</span>
        )}
      </div>
    </div>
  );
};

export default HobbiesList;
