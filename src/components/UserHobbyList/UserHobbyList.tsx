import React, { useState, useRef, useEffect } from 'react';
import './UserHobbyList.scss';
import allActions from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxStoreInterface } from '../../constants';
import HobbiesList from '../HobbiesList/HobbiesList';
import UsersList from '../UsersList/UsersList';
import ConfirmationModal from '../common/ConfirmationModal/ConfirmationModal';
import LoadingModal from '../common/LoadingModal/LoadingModal';

export interface HobbyInterface {
  id: string;
  passion: string;
  name: string;
  date: string;
}

export interface UserInterface {
  id: string;
  name: string;
  hobbies: Array<HobbyInterface>;
}

const UserHobbyList = () => {
  const passionLevels = ['Very High', 'High', 'Medium', 'Low'];
  const [selectedUser, setSelectedUser] = useState({} as UserInterface);
  const [userToAdd, setUserToAdd] = useState('');
  const [hobbyInfo, setHobbyInfo] = useState({
    name: '',
    passion: '',
    date: '',
  } as HobbyInterface);
  const users = useSelector((state: ReduxStoreInterface) => state.users.data);
  const isLoading = useSelector(
    (state: ReduxStoreInterface) => state.users.isLoading,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.userActions.loadUsers());
  }, []);

  const resetAppState = () => {
    setHobbyInfo({
      name: '',
      passion: '',
      date: '',
    } as HobbyInterface);
    setSelectedUser({} as UserInterface);
    setUserToAdd('');
  }

  const handleAddUserClick = () => {
    const newUser = {
      id: '', //id is generated on the mocked server when 0 is passed
      name: userToAdd,
      hobbies: [],
    };
    resetAppState();
    dispatch(allActions.userActions.addUser(newUser));
  };

  const handleAddHobbyClick = () => {
    const updatedUser = {
      ...selectedUser,
      hobbies: [
        ...selectedUser.hobbies,
        {
          ...hobbyInfo,
        },
      ],
    } as UserInterface;
    resetAppState();
    dispatch(allActions.userActions.updateUser(updatedUser));
  };

  const handleDeleteHobbyClick = (hobbyID: string) => {
    const updatedHobbies = selectedUser.hobbies.filter(
      (_hobby) => _hobby.id !== hobbyID,
    );
    const updatedUser = {
      ...selectedUser,
      hobbies: [...updatedHobbies],
    };
    resetAppState();
    dispatch(allActions.userActions.updateUser(updatedUser));
  };

  return (
    <div className="hobby-list">
      <h2 className="hobby-list__title">User Hobbies</h2>
      <div className="hobby-list__content">
        {!isLoading && users ? (
          <>
            <UsersList
              inputValue={userToAdd}
              inputHandler={setUserToAdd}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              handleAddUser={handleAddUserClick}
              userList={users}
            />
            <HobbiesList
              handleAddHobby={handleAddHobbyClick}
              handleDeleteClick={handleDeleteHobbyClick}
              hobby={hobbyInfo}
              setHobby={setHobbyInfo}
              selectedUser={selectedUser}
              passionLevels={passionLevels}
            />
          </>
        ) : (
          <LoadingModal />
        )}
      </div>
    </div>
  );
};

export default UserHobbyList;
