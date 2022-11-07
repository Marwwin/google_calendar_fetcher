import fetch from "node-fetch";

export function createGetCalendar(config) {
  let cache;

  return async function getCalender() {
    try {
      const response = await fetch(calendarURL(config));
      const json = await response.json();
      cache = JSON.stringify(json);
      return cache;
    } catch (error) {
      return (cache ? cache : error);
    }
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
