import { createGetCalendar } from "./getCalendar.js";
import glob from "glob";
import path from "path";

export default async function createEndpoints(app) {
  for (const filename of calendars()) {
    const { config } = await import(path.resolve(filename));
    createEndpoint(config, app);
  }
}

function calendars() {
  return glob.sync("./calendars/**/*.js");
}

function createEndpoint(config, app) {
  const getCalender = createGetCalendar(config);
  const endpoint = config.endpoint || config.name.replaceAll(" ", "_");

  app.get(`/${endpoint}`, (req, response) => {
    getCalender()
      .then((result) => sendResult(response, result))
      .catch((error) => sendError(response, error));
  });
  console.log(`Created endpoint ${endpoint}`);
}

function sendResult(response, result) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.write(result);
  response.end();
}

function sendError(response, error) {
  response.statusCode = error.statusCode;
  response.write(error.statusText);
  response.end();
}
