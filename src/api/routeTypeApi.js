import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/routeTypes/";

export function getRouteTypes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
