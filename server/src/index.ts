import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import server from "./server";
import config from "./assets/config.json";

// **** Run **** //

const SERVER_START_MSG =
  "⚡️ Express server started on port: " + config.PORT.toString();

server.listen(config.PORT, () => logger.info(SERVER_START_MSG));
