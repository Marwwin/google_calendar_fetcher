import { createServer } from "./utils/createServer.js";
import glob from "glob";
import path from "path";

const DEFAULT_HOSTNAME = "0.0.0.0"; 

glob.sync("./calendars/**/*.js").forEach((file) => {
  import(path.resolve(file)).then(({ config }) => {
    const { port, name } = config;
    const hostname = getHostname(config);
    createServer(config).listen(port, hostname, () => {
      console.log(`${name} server running at http://${hostname}:${port}/`);
    });
  });
});

function getHostname(config) {
  const { hostname } = config;
  return hostname ? hostname : DEFAULT_HOSTNAME;
}
