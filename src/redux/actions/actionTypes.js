export const CREATE_COURSE = "CREATE_COURSE";
export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
///////
/////// NEW CONTENT
///////
export const CREATE_ROUTE = "CREATE_ROUTE";
export const LOAD_ROUTES_SUCCESS = "LOAD_ROUTES_SUCCESS";
export const CREATE_ROUTE_SUCCESS = "CREATE_ROUTE_SUCCESS";
export const UPDATE_ROUTE_SUCCESS = "UPDATE_ROUTE_SUCCESS";
export const LOAD_LOCATIONS_SUCCESS = "LOAD_LOCATIONS_SUCCESS";
export const LOAD_GRADES_SUCCESS = "LOAD_GRADES_SUCCESS";
export const LOAD_TYPES_SUCCESS = "LOAD_TYPES_SUCCESS";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";
export const DELETE_ROUTE_OPTIMISTIC = "DELETE_ROUTE_OPTIMISTIC";
