import React, { Ref, RefObject } from 'react'
import './UsersList.scss';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';
import { UserInterface } from '../UserHobbyList/UserHobbyList';

interface UsersListInterface {
  inputValue: any;
  inputHandler: (e: any) => void;
  handleAddUser: () => void;
  userList: Array<UserInterface>;
  activeUser: UserInterface;
  setActiveUser: (e: UserInterface) => void;
  className?: string;
  style?: {};
}

const UsersList = ({inputValue, inputHandler, handleAddUser, userList, activeUser, setActiveUser, className = '', style = {}}: UsersListInterface) => {
  return (
    <div className={`hobby-list__column ${className}`} style={style}>
      <span className="hobby-list__column-buttonContainer">
        <TextInput
          placeholder="Enter username"
          value={inputValue}
          onChange={(e) => inputHandler(e.target.value)}
        />
        <Button
          className="hobby-list__column-button"
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
            <span
              key={`${_user.name}${_i}`}
              className={`hobby-list__users-listing ${
                activeUser.id === _user.id
                  ? "hobby-list__users-listing-active"
                  : ""
              }`}
              onClick={() => setActiveUser(_user)}
            >
              {_user.name}
            </span>
          ))}
      </div>
    </div>
  )
}

export default UsersList
