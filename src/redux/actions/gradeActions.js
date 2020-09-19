import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as gradeApi from "../../api/gradeApi";

export function loadGradesSuccess(grades) {
  return { type: types.LOAD_GRADES_SUCCESS, grades };
}

export function loadGrades() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return gradeApi
      .getGrades()
      .then((grades) => {
        dispatch(loadGradesSuccess(grades));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
