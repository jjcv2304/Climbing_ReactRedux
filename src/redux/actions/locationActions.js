import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as locationApi from "../../api/locationApi";

export function loadLocationsSuccess(locations) {
  return { type: types.LOAD_LOCATIONS_SUCCESS, locations };
}

export function loadLocations() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return locationApi
      .getLocations()
      .then((locations) => {
        dispatch(loadLocationsSuccess(locations));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
