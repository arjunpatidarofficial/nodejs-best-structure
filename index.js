const { infoLogger, errorLogger } = require("./utils/logger");
const dotenv = require("dotenv");
dotenv.config();

const type = process.env.PROCESS_TYPE;
infoLogger.info(`Starting '${type}' process`, { pid: process.pid });

if (type === "web") {
  require("./web");
} else if (type === "worker") {
  require("./worker");
} else {
  throw new Error(`
    ${type} is an unsupported process type. 
    Use one of: 'web', 'worker'!
  `);
}
