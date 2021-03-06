import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function routeReducer(state = initialState.routes, action) {
  switch (action.type) {
    case types.CREATE_ROUTE_SUCCESS:
      return [...state, { ...action.route }];
    case types.UPDATE_ROUTE_SUCCESS:
      return state.map((route) =>
        route.id === action.route.id ? action.route : route
      );
    case types.LOAD_ROUTES_SUCCESS:
      return action.routes;
    case types.DELETE_ROUTE_OPTIMISTIC:
      return state.filter((route) => route.id !== action.route.id);
    default:
      return state;
  }
}
