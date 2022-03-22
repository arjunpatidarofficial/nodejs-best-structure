const redis = require("redis");
const { infoLogger, errorLogger } = require("../../../utils/logger");

const redisClient = redis.createClient();

redisClient.on("connect", () => {
  infoLogger.info("Client connect to redis");
});

redisClient.on("ready", () => {
  infoLogger.info("Client connected to redis and ready to use");
});

redisClient.on("error", (err) => {
  errorLogger.error(err.message);
});

redisClient.on("end", () => {
  errorLogger.error("Client connect to redis");
});

redisClient.on("SIGINT", () => {
  redisClient.quit();
});

module.exports = redisClient;
