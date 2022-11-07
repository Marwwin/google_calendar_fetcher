import fetch from "node-fetch";

export function createGetCalendar(config) {
  let cache;

  return function getCalender() {
    return fetch(calendarURL(config))
      .then((response) => response.json())
      .then((data) => {
        cache = JSON.stringify(data);
        return cache;
      })
      .catch((error) => (cache ? cache : error));
  };
}

function calendarURL(config) {
  const { url, parameters } = config;
  return url + parametersToURL(parameters);
}

function parametersToURL(parameters) {
  return Object.entries(parameters)
    .map((entry) => entry.join("="))
    .join("&");
}
