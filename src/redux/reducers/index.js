import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import routes from "./routeReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  routes,
  apiCallsInProgress,
});

export default rootReducer;
