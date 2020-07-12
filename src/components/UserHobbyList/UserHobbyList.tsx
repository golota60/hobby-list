import React, { useState, useRef, useEffect } from "react";
import "./UserHobbyList.scss";
import allActions from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { ReduxStoreInterface } from "../../constants";
import HobbiesList from "../HobbiesList/HobbiesList";
import UsersList from "../UsersList/UsersList";

export interface HobbyInterface {
  passion: string;
  name: string;
  date: string;
}

export interface UserInterface {
  id: number;
  name: string;
  hobbies: Array<HobbyInterface>;
}

const UserHobbyList = () => {
  const componentRef = useRef(null);
  const users = useSelector((state: ReduxStoreInterface) => state.users.users);
  const isLoading = useSelector((state: ReduxStoreInterface) => state.users.isLoading);
  const dispatch = useDispatch();
  const [userShown, setUserShown] = useState({} as UserInterface);
  const [userToAdd, setUserToAdd] = useState("");
  const [hobbyInfo, setHobbyInfo] = useState({
    name: "",
    passion: "",
    date: "",
  } as HobbyInterface);

  useEffect(() => {
    dispatch(allActions.userActions.loadUsers());
  }, []);

  console.log(hobbyInfo);

  const handleAddUser = () => {
    dispatch(
      allActions.userActions.addUser({
        id: 0, //id is generated on the mocked server when 0 is passed
        name: userToAdd,
        hobbies: [],
      })
    );
  };

  const handleAddHobby = () => {};

  return (
    <div className="hobby-list">
      <h2 className="hobby-list__title">User Hobbies</h2>
      <div className="hobby-list__content" ref={componentRef}>
        <UsersList
          inputValue={userToAdd}
          inputHandler={setUserToAdd}
          activeUser={userShown}
          setActiveUser={setUserShown}
          handleAddUser={handleAddUser}
          userList={users}
        />
        <HobbiesList
          handleAddHobby={handleAddHobby}
          user={userShown}
          hobby={hobbyInfo}
          setHobby={setHobbyInfo}
        />
      </div>
    </div>
  );
};

export default UserHobbyList;
