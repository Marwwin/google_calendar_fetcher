import http from "http";
import { createGetCalendar } from "../utils/calendarFactory.js";

export function createServer(config) {
  const getCalender = createGetCalendar(config);
  return http.createServer((request, response) => {
    getCalender()
      .then((result) => {
        sendResponse(response, result);
      })
      .catch((error) => console.log(error));
  });
}

function sendResponse(response, result) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.write(result);
  response.end();
}
