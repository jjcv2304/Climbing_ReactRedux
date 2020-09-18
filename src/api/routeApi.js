import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/routes/";

export function getRoutes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveRoute(route) {
  return fetch(baseUrl + (route.id || ""), {
    method: route.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(route),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRoute(routeId) {
  return fetch(baseUrl + routeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
