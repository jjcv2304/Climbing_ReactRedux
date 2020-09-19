import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function gradeReducer(state = initialState.grades, action) {
  switch (action.type) {
    case types.LOAD_GRADES_SUCCESS:
      return action.grades;
    default:
      return state;
  }
}
