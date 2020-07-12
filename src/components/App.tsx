import React from "react";
import "./App.scss";
import AgeComponent from "./AgeComponent/AgeComponent";
import UserHobbyList from "./UserHobbyList/UserHobbyList";

const App = () => {
  return (
    <div className="App">
      <div className="hobby-list__wrapper">
        <UserHobbyList />
      </div>
    </div>
  );
};

export default App;
