import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import * as routeTypeApi from "../../api/routeTypeApi";

export function loadTypesSuccess(routeTypes) {
  return { type: types.LOAD_TYPES_SUCCESS, routeTypes };
}

export function loadTypes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return routeTypeApi
      .getRouteTypes()
      .then((routeTypes) => {
        dispatch(loadTypesSuccess(routeTypes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
