import express from "express";
import createEndpoints from "./utils/createEndpoints.js";

const PORT = 3000;
const HOSTNAME = "0.0.0.0";

main();

function main() {
  const app = express();
  createEndpoints(app);
  app.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`);
  });
}
