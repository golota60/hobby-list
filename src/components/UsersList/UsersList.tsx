import React, { Ref, RefObject, useState } from 'react';
import './UsersList.scss';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import { UserInterface } from '../UserHobbyList/UserHobbyList';
import ConfirmationModal from '../common/ConfirmationModal/ConfirmationModal';

interface UsersListInterface {
  inputValue: any;
  inputHandler: (e: any) => void;
  handleAddUser: () => void;
  userList: Array<UserInterface>;
  selectedUser: UserInterface;
  setSelectedUser: (e: UserInterface) => void;
  className?: string;
  style?: {};
}

const UsersList = ({
  inputValue,
  inputHandler,
  handleAddUser,
  userList,
  selectedUser,
  setSelectedUser,
  className = '',
  style = {},
}: UsersListInterface) => {
  return (
    <>
    <div className={`hobby-list__userForm ${className}`} style={style}>
      <span className="hobby-list__userForm-form">
        <TextInput
          className="hobby-list__userForm-input"
          placeholder="Enter username"
          value={inputValue}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <Button
          className="hobby-list__userForm-button"
          onClick={handleAddUser}
          showPlus
          disabled={!inputValue}
        >
          Add
        </Button>
      </span>
      <div className="hobby-list__users">
        {userList &&
          userList.map((_user: UserInterface, _i) => (
            <button
              key={`${_user.name}${_i}`}
              className={`hobby-list__users-listing ${
                selectedUser.id === _user.id
                  ? 'hobby-list__users-listing-active'
                  : ''
              }`}
              onClick={() => setSelectedUser(_user)}
            >
              {_user.name}
            </button>
          ))}
      </div>
    </div>
    </>
  );
};

export default UsersList;
