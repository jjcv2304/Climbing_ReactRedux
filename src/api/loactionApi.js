import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/location/";

export function getLocations() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
