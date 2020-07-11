import React, { Component } from 'react';
import './AgeComponent.scss';
import {  useSelector, useDispatch } from 'react-redux';
import allActions from '../../actions/index';

const AgeComponent = () => {
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();
  console.log(age)
  return (
    <div>
    Age: {age}
      <div>
      <button onClick={() => dispatch(allActions.ageActions.addAge(age+1))}>add</button>
      <button onClick={() => dispatch(allActions.ageActions.addAge(age-1))}>remove</button>
      </div>
    </div>
  )
}

export default AgeComponent;
