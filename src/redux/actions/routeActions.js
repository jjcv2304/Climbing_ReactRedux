import * as types from "./actionTypes";
import * as routeApi from "../../api/routeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadRoutesSuccess(routes) {
  return { type: types.LOAD_ROUTES_SUCCESS, routes };
}

export function createRouteSuccess(route) {
  return { type: types.CREATE_ROUTE_SUCCESS, route };
}

export function updateRouteSuccess(route) {
  return { type: types.UPDATE_ROUTE_SUCCESS, route };
}

export function deleteRouteOptimistic(route) {
  return { type: types.DELETE_ROUTE_OPTIMISTIC, route };
}

export function loadRoutes() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return routeApi
      .getRoutes()
      .then((routes) => {
        dispatch(loadRoutesSuccess(routes));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveRoute(route) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return routeApi
      .saveRoute(route)
      .then((savedRoute) => {
        route.id
          ? dispatch(updateRouteSuccess(savedRoute))
          : dispatch(createRouteSuccess(savedRoute));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteRoute(route) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteRouteOptimistic(route));
    return routeApi.deleteRoute(route.id);
  };
}
