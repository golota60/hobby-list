import React, { useState } from 'react';
import './HobbiesList.scss';
import { UserInterface, HobbyInterface } from '../UserHobbyList/UserHobbyList';
import Button from '../common/Button/Button';
import HobbyListing from '../HobbyListing/HobbyListing';
import TextInput from '../common/TextInput/TextInput';
import Dropdown from '../common/Dropdown/Dropdown';
import ConfirmationModal from '../common/ConfirmationModal/ConfirmationModal';

interface HobbiesListInterface {
  selectedUser: UserInterface;
  handleAddHobby: () => void;
  className?: string;
  style?: {};
  hobby: HobbyInterface;
  setHobby: (e: HobbyInterface) => void;
  passionLevels: Array<string>;
  handleDeleteClick: (e: string) => void;
}

const HobbiesList = ({
  selectedUser,
  handleAddHobby,
  className = '',
  style = {},
  hobby,
  setHobby,
  passionLevels,
  handleDeleteClick
}: HobbiesListInterface) => {
  const isHobbyInputFilled = Object.values(hobby).filter((_val) => _val !== '').length === 0;
  return (
    <>
    <div className={`hobby-list__hobbiesForm ${className}`} style={style}>
      <span className="hobby-list__hobbiesForm-inputs">
        <Dropdown
          placeholder="Passion"
          options={passionLevels}
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
          className="hobby-list__hobbiesForm-button"
          showPlus
          onClick={handleAddHobby}
          disabled={isHobbyInputFilled}
        >
          Add
        </Button>
      </span>
      <div className="hobby-list__userHobbies">
        {selectedUser.hobbies ? (
          selectedUser.hobbies.map((_hobby, _i) => (
            <HobbyListing hobby={_hobby} key={`${_hobby.name}${_i}`} onDeleteClick={() => handleDeleteClick(_hobby.id)}/>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
    </>
  );
};

export default HobbiesList;
