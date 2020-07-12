import React, { useState } from 'react';
import './HobbyListing.scss';
import { HobbyInterface } from '../UserHobbyList/UserHobbyList';
import DeleteIcon from '../common/DeleteIcon/DeleteIcon';
import ConfirmationModal from '../common/ConfirmationModal/ConfirmationModal';

interface HobbyListingInterface {
  hobby: HobbyInterface;
  onDeleteClick: () => void;
}

const HobbyListing = ({ hobby, onDeleteClick }: HobbyListingInterface) => {

  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
    <ConfirmationModal
        isShown={isModalOpen}
        dismissAction={() => setModalOpen(false)}
        confirmAction={onDeleteClick}
      />
    <span className="hobby-list__userHobbies-hobby">
      <p className="hobby-list__userHobbies-hobby-listing listing-passion">{hobby.passion}</p>
      <p className="hobby-list__userHobbies-hobby-listing listing-name">{hobby.name}</p>
      <span className="hobby-list__userHobbies-hobby-listing listing-date">
        Since {hobby.date}
        <DeleteIcon onClick={() => setModalOpen(true)}/>
      </span>
    </span>
    </>
  );
};

export default HobbyListing;
