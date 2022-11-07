import { createServer } from "./utils/createServer.js";
import glob from "glob";
import path from "path";

const DEFAULT_PARAMETERS = {
  hostname: "0.0.0.0",
  port: 3000,
};

main();

async function main() {
  
  for (const filename of calendars()) {
    const { config } = await import(path.resolve(filename));
    startServer(config);
  }
}

function calendars() {
  return glob.sync("./calendars/**/*.js");
}

function startServer(config) {
  const { port, name, hostname } = applyDefaultParameters(
    config,
    DEFAULT_PARAMETERS
  );

  const server = createServer(config);

  server.listen(port, hostname, () => {
    console.log(`${name} server running at http://${hostname}:${port}/`);
  });
}

function applyDefaultParameters(config, defaultParameters) {
  const fixedValues = Object.fromEntries(
    Object.entries(defaultParameters).map(([key, value]) => {
      const newV = config[key] ? config[key] : value;
      return [key, newV];
    })
  );
  return { ...config, ...fixedValues };
}