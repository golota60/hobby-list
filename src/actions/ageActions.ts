import { SET_AGE } from '../constants';

const addAge = (age: number) => ({
  type: SET_AGE,
  payload: age
})

export default {
  addAge
}
