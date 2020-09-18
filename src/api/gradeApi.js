import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/grades/";

export function getGrades() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
