import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import routes from "./routeReducer";
import locations from "./locationReducer";
import grades from "./gradeReducer";
import routeTypes from "./routeTypeReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  routes,
  locations,
  grades,
  routeTypes,
  apiCallsInProgress,
});

export default rootReducer;
